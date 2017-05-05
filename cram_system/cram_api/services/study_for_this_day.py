from django.utils import timezone

from cram_api.models.student_model import StudentStudySigning


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
    for signing in signing_list:
        obj = {
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

    signingExpect = signing_expect(d)
    signingActual = signing_actual(d)
    signingAbsent = signing_absent(d)
    signingLeave = signing_leave(d)

    quizCreateDone = quiz_create_done(d)
    quizCreateNotDone = quiz_create_not_done(d)

    homeworkDone = homework_done(d)
    homeworkNotDone = homework_not_done(d)

    quizDone = quiz_done(d)
    quizNotDone = quiz_not_done(d)

    planDone = plan_done(d)
    planNotDone = plan_not_done(d)

    leftDone = left_done(d)
    leftNotDone = left_not_done(d)

    result = {
        "signingExpect": signingExpect['count'],
        "signingActual": signingActual['count'],
        "signingAbsent": signingAbsent['count'],
        "signingLeave": signingLeave['count'],
        "quizCreateExpect": signingActual['count'],
        "quizCreateDone": quizCreateDone['count'],
        "quizCreateNotDone": quizCreateNotDone['count'],
        "homeworkExpect": signingActual['count'],
        "homeworkDone": homeworkDone['count'],
        "homeworkNotDone": homeworkNotDone['count'],
        "quizExpect": signingActual['count'],
        "quizDone": quizDone['count'],
        "quizNotDone": quizNotDone['count'],
        "planExpect": signingActual['count'],
        "planDone": planDone['count'],
        "planNotDone": planNotDone['count'],
        "leftExpect": signingActual['count'],
        "leftCanGo": planDone['count'],
        "leftDone": leftDone['count'],
        "leftNotDone": leftNotDone['count'],
    }
    return result


def collect_signing_expect_list(date):
    d = datetime_gen(date)
    signingExpect = signing_expect(d)
    return signingExpect
