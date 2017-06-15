from django.utils import timezone

from cram_api.models.student_model import StudentStudySigning
from cram_api.services.student_with_study import get_plan_number_by_date


def datetime_gen(date):
    split_date = date.split("-")
    result = timezone.datetime(
        year=int(split_date[0]),
        month=int(split_date[1]),
        day=int(split_date[2])
    )
    return result


def trans_grade(grade):
    table = {
        '5': '小五',
        '6': '小六',
        '7': '國一',
        '8': '國二',
        '9': '國三',
        '10': '高一',
        '11': '高二',
        '12': '高三',
    }
    return table[grade]


def loop_through_signing_list(signing_list):
    content = []
    now = timezone.now()
    date = str(now.year) + '-' + str(now.month) + '-' + str(now.day)
    for signing in signing_list:
        plan_number = get_plan_number_by_date(str(signing.owner.id), date)
        obj = {
            "plan_number": plan_number,
            "id": str(signing.id),
            "student_seat": signing.seat,
            "student_id": str(signing.owner.id),
            "student_name": signing.owner.name,
            "student_school": signing.owner.school,
            "student_grade": trans_grade(signing.owner.grade),
            "finish_previous": signing.finish_previous,
            "sign_at": signing.sign_at,
            "sign": signing.sign,
            "leave": signing.leave,
            "create_quiz_at": signing.create_quiz_at,
            "have_create_quiz": signing.have_create_quiz,
            "finish_homework_at": signing.finish_homework_at,
            "finish_homework": signing.finish_homework,
            "finish_quiz_at": signing.finish_quiz_at,
            "finish_quiz": signing.finish_quiz,
            "finish_plan_at": signing.finish_plan_at,
            "finish_plan": signing.finish_plan,
            "left_at": signing.left_at,
            "left": signing.left,
        }
        content.append(obj)
    result = {
        "signing_list": content,
        "count": signing_list.count(),
    }
    return result


def signing_expect(date):
    signing_list = StudentStudySigning.objects.filter(date=date)
    return loop_through_signing_list(signing_list)


def signing_actual(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True)
    return loop_through_signing_list(signing_list)


def signing_absent(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=False, leave=False)
    return loop_through_signing_list(signing_list)


def signing_leave(date):
    signing_list = StudentStudySigning.objects.filter(date=date, leave=True)
    return loop_through_signing_list(signing_list)


def quiz_create_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, have_create_quiz=True)
    return loop_through_signing_list(signing_list)


def quiz_create_not_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, have_create_quiz=False)
    return loop_through_signing_list(signing_list)


def homework_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, finish_homework=True)
    return loop_through_signing_list(signing_list)


def homework_not_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, finish_homework=False)
    return loop_through_signing_list(signing_list)


def quiz_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, finish_quiz=True)
    return loop_through_signing_list(signing_list)


def quiz_not_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, finish_quiz=False)
    return loop_through_signing_list(signing_list)


def plan_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, finish_plan=True)
    return loop_through_signing_list(signing_list)


def plan_not_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, finish_plan=False)
    return loop_through_signing_list(signing_list)


def left_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, left=True)
    return loop_through_signing_list(signing_list)


def left_not_done(date):
    signing_list = StudentStudySigning.objects.filter(date=date, sign=True, left=False)
    return loop_through_signing_list(signing_list)


def sign_in(signing_id):
    signing = StudentStudySigning.objects.get(id=signing_id)
    signing.sign = True
    signing.sign_at = timezone.now()
    signing.save()
    return {'status': 'success'}


def take_a_leave(signing_id):
    signing = StudentStudySigning.objects.get(id=signing_id)
    signing.leave = True
    signing.save()
    return {'status': 'success'}


def collect_the_study_number_report(date):
    d = datetime_gen(date)
    signing_list = StudentStudySigning.objects.filter(date=d)

    signingExpect = signing_list.count()
    signingActual = 0
    signingLeave = 0
    quizCreateDone = 0
    homeworkDone = 0
    quizDone = 0
    planDone = 0
    leftDone = 0

    for signing in signing_list:
        if signing.sign:
            signingActual = signingActual + 1
        if signing.leave:
            signingLeave = signingLeave + 1
        if signing.have_create_quiz:
            quizCreateDone = quizCreateDone + 1
        if signing.finish_homework:
            homeworkDone = homeworkDone + 1
        if signing.finish_quiz:
            quizDone = quizDone + 1
        if signing.finish_plan:
            planDone = planDone + 1
        if signing.left:
            leftDone = leftDone + 1

    signingAbsent = signingExpect - signingActual - signingLeave
    quizCreateNotDone = signingActual - quizCreateDone
    homeworkNotDone = signingActual - homeworkDone
    quizNotDone = signingActual - quizDone
    planNotDone = signingActual - planDone
    leftNotDone = signingActual - leftDone

    result = {
        "signingExpect": signingExpect,
        "signingActual": signingActual,
        "signingAbsent": signingAbsent,
        "signingLeave": signingLeave,
        "quizCreateExpect": signingActual,
        "quizCreateDone": quizCreateDone,
        "quizCreateNotDone": quizCreateNotDone,
        "homeworkExpect": signingActual,
        "homeworkDone": homeworkDone,
        "homeworkNotDone": homeworkNotDone,
        "quizExpect": signingActual,
        "quizDone": quizDone,
        "quizNotDone": quizNotDone,
        "planExpect": signingActual,
        "planDone": planDone,
        "planNotDone": planNotDone,
        "leftExpect": signingActual,
        "leftCanGo": planDone,
        "leftDone": leftDone,
        "leftNotDone": leftNotDone,
    }
    return result


def collect_signing_expect_list(date):
    d = datetime_gen(date)
    signingExpect = signing_expect(d)
    return signingExpect


def collect_signing_absent_list(date):
    d = datetime_gen(date)
    signingAbsent = signing_absent(d)
    return signingAbsent


def collect_signing_actual_list(date):
    d = datetime_gen(date)
    signingActual = signing_actual(d)
    return signingActual


def collect_signing_leave_list(date):
    d = datetime_gen(date)
    signingLeave = signing_leave(d)
    return signingLeave


def collect_quiz_create_done_list(date):
    d = datetime_gen(date)
    quizCreateDone = quiz_create_done(d)
    return quizCreateDone


def collect_quiz_create_not_done_list(date):
    d = datetime_gen(date)
    quizCreateNotDone = quiz_create_not_done(d)
    return quizCreateNotDone


def collect_homework_done_list(date):
    d = datetime_gen(date)
    homeworkDone = homework_done(d)
    return homeworkDone


def collect_homework_not_done_list(date):
    d = datetime_gen(date)
    homeworkNotDone = homework_not_done(d)
    return homeworkNotDone


def collect_quiz_done_list(date):
    d = datetime_gen(date)
    quizDone = quiz_done(d)
    return quizDone


def collect_quiz_not_done_list(date):
    d = datetime_gen(date)
    quizNotDone = quiz_not_done(d)
    return quizNotDone


def collect_plan_done_list(date):
    d = datetime_gen(date)
    planDone = plan_done(d)
    return planDone


def collect_plan_not_done_list(date):
    d = datetime_gen(date)
    planNotDone = plan_not_done(d)
    return planNotDone


def collect_left_done_list(date):
    d = datetime_gen(date)
    leftDone = left_done(d)
    return leftDone


def collect_left_not_done_list(date):
    d = datetime_gen(date)
    leftNotDone = left_not_done(d)
    return leftNotDone
