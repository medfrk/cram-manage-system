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
            "sign_at": signing.sign_at,
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


def collect_study_signing_data(date):
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
        "signingExpect": signingExpect,
        "signingActual": signingActual,
        "signingAbsent": signingAbsent,
        "signingLeave": signingLeave,
        "quizCreateDone": quizCreateDone,
        "quizCreateNotDone": quizCreateNotDone,
        "homeworkDone": homeworkDone,
        "homeworkNotDone": homeworkNotDone,
        "quizDone": quizDone,
        "quizNotDone": quizNotDone,
        "planDone": planDone,
        "planNotDone": planNotDone,
        "leftDone": leftDone,
        "leftNotDone": leftNotDone,
    }
    return result


# class StudentStudySigning(models.Model):
#     owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
#     seat = models.CharField(max_length=50, default="")
#     date = models.DateField(default=timezone.now, editable=True)
#     finish_previous = models.BooleanField(default=False)
#     sign_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
#     sign = models.BooleanField(default=False)
#     leave = models.BooleanField(default=False)
#     create_quiz_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
#     have_create_quiz = models.BooleanField(default=False)
#     finish_homework_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
#     finish_homework = models.BooleanField(default=False)
#     finish_quiz_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
#     finish_quiz = models.BooleanField(default=False)
#     finish_plan_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
#     finish_plan = models.BooleanField(default=False)
#     left_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
#     left = models.BooleanField(default=False)
#     updated_at = models.DateTimeField(auto_now=True)
#     created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)
