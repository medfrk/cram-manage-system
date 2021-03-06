from django.utils import timezone
from cram_api.models.student_model import Student, StudentStudy, StudentStudySigning, StudentStudyBank, StudentPlan, StudentQuiz
from datetime import timedelta

"""
Provide Services for the interaction between Student and Study
"""


def datetime_gen(date):
    split_date = date.split("-")
    result = timezone.datetime(
        year=int(split_date[0]),
        month=int(split_date[1]),
        day=int(split_date[2])
    )
    return result


def get_study_student_by_day(day):
    """
    Get all study students in a specific day.
    """
    students = StudentStudy.objects.filter(day=day)

    student_list = []
    for student in students:
        obj = {
            "id": str(student.owner.id),
            "name": student.owner.name,
            "grade": student.owner.grade,
            "school": student.owner.school,
            "start_at": student.start_at,
            "end_at": student.end_at,
            "seat": student.seat.name,
        }
        student_list.append(obj)
    result = {
        "day": day,
        "students": student_list,
    }
    return result


def get_all_study_student():
    """
    Get all study students in a day range.
    """
    day_list = [1, 2, 3, 4, 5, 6, 7]
    content = []
    for day in day_list:
        content.append(get_study_student_by_day(day))
    result = {
        "all_students": content,
    }
    return result


def get_study_signing_by_date(date):
    """
    Get student's signing table for a specific day.
    """
    d = datetime_gen(date)
    signing_list = StudentStudySigning.objects.filter(date=d)
    content = []
    for signing in signing_list:
        obj = {
            "id": str(signing.id),
            "owner": str(signing.owner.id),
            "finish_previous": signing.finish_previous,
            "sign": signing.sign,
            "finish_homework": signing.finish_homework,
            "finish_quiz": signing.finish_quiz,
            "finish_plan": signing.finish_plan,
            "left": signing.left,
            "updated_at": signing.updated_at,
            "created_at": signing.created_at,
        }
        content.append(obj)
    result = {
        "date": date,
        "signing_list": content,
    }
    return result


def get_study_signing_by_date_range(date_start, date_end):
    """
    Get student's signing table for a date range.
    """
    d_start = datetime_gen(date_start)
    d_end = datetime_gen(date_end)
    content = []
    for day in range((d_end - d_start).days+1):
        date = d_start + timedelta(day)
        content.append(get_study_signing_by_date(date.strftime("%Y-%m-%d")))
    result = {
        "signing_list": content,
        "date_start": date_start,
        "data_end": date_end,
    }
    return result


def get_study_bank_by_student_id(student_id):
    """
    Get Student's Study Bank by student id.
    """
    student = Student.objects.get(id=student_id)
    if StudentStudyBank.objects.filter(owner=student).exists():
        bank = StudentStudyBank.objects.get(owner=student)
        result = {
            "id": str(bank.id),
            "student_id": student_id,
            "student_name": student.name,
            "balance": bank.balance,
        }
    else:
        result = {
            "student_id": student_id,
            "student_name": student.name,
            "error": "this study bank does not exist"
        }
    return result


def get_all_study_bank():
    """
    Get All Students' Study Bank.
    """
    students = Student.objects.all()
    bank_list = []
    for student in students:
        if StudentStudy.objects.filter(owner=student).exists():
            bank_list.append(get_study_bank_by_student_id(student.id))
    result = {
        "bank_list": bank_list
    }
    return result


def get_all_quiz_by_student_id_and_date(student_id, date):
    """
    Get all the quiz for a student in a specific date. 
    :param student_id: student's primary key.
    :param date: usually be today.
    :return: collection of quiz list.
    """
    student = Student.objects.get(id=student_id)
    d = datetime_gen(date)
    all_quiz = StudentQuiz.objects.filter(owner=student, date=d)
    if all_quiz.exists():
        quiz_list = []
        for quiz in all_quiz:
            obj = {
                "id": str(quiz.id),
                "date": quiz.date,
                "subject": quiz.subject,
                "range": quiz.range,
                "finish": quiz.finish,
                "score": quiz.score,
                "note": quiz.note,
            }
            quiz_list.append(obj)
        result = {
            "quiz_list": quiz_list,
            "count": all_quiz.count(),
        }
        return result
    else:
        result = {
            "quiz_list": [],
            "count": 0,
        }
        return result


def get_plan_number_by_date(student_id, date):
    d = datetime_gen(date)
    student = Student.objects.get(id=student_id)
    plans = StudentPlan.objects.filter(owner=student, date=d)

    plan_all = 0
    plan_done = 0
    plan_not_done = 0

    if plans.exists():
        plan_all = plans.count()
        for plan in plans:
            if plan.finish:
                plan_done = plan_done + 1
            else:
                plan_not_done = plan_not_done + 1

    result = {
        "date": date,
        "plan_all": plan_all,
        "plan_done": plan_done,
        "plan_not_done": plan_not_done,
    }
    return result


def get_plan_number_by_date_range(student_id, date_start, date_end):
    d_start = datetime_gen(date_start)
    d_end = datetime_gen(date_end)

    content = []
    for day in range((d_end - d_start).days + 1):
        date = d_start + timedelta(day)
        content.append(get_plan_number_by_date(student_id, date.strftime("%Y-%m-%d")))
    result = {
        "plan_number_list": content,
        "date_start": date_start,
        "data_end": date_end,
    }
    return result


def get_plan_by_date(student_id, date):
    d = datetime_gen(date)
    student = Student.objects.get(id=student_id)
    plans = StudentPlan.objects.filter(owner=student, date=d)

    if plans.exists():
        plan_list = []
        for plan in plans:
            obj = {
                "id": str(plan.id),
                "date": plan.date,
                "subject": plan.subject,
                "range": plan.range,
                "need_quiz": plan.need_quiz,
                "score": plan.score,
                "finish_quiz": plan.finish_quiz,
                "finish": plan.finish,
                "note": plan.note,
                "updated_at": plan.updated_at,
                "created_at": plan.created_at,
            }
            plan_list.append(obj)
        result = {
            "date": date,
            "plan_list": plan_list,
        }
        return result
    else:
        result = {
            "date": date,
            "plan_list": [],
        }
        return result


def collect_plan_list(student_id, date_start, date_end):
    d_start = datetime_gen(date_start)
    d_end = datetime_gen(date_end)

    content = []
    for day in range((d_end - d_start).days+1):
        date = d_start + timedelta(day)
        content.append(get_plan_by_date(student_id, date.strftime("%Y-%m-%d")))
    result = {
        "plan_list": content,
        "date_start": date_start,
        "data_end": date_end,
    }
    return result


def create_study_signing_by_student_id(student_id, seat, date):
    """
    Create Study Signing Table for a specific student by student id and date.
    """
    student = Student.objects.get(id=student_id)
    d = datetime_gen(date)

    # check for the last 7 day's study plan, if there are unfinished plan, then set finish_previous False
    filter_start = d - timedelta(7)
    filter_end = d - timedelta(1)
    finish_previous_plan = True
    if StudentPlan.objects.filter(owner=student, finish=False, date__range=[filter_start, filter_end]).exists():
        finish_previous_plan = False

    if StudentStudySigning.objects.filter(owner=student, date=d).exists():
        result = {
            'error': 'study signing table already exist',
            'student_id': student_id,
            'student_name': student.name,
            'student_seat': seat,
            'date': date,
        }
    else:
        StudentStudySigning.objects.create(
            owner=student,
            seat=seat,
            date=d,
            finish_previous=finish_previous_plan,
        )
        result = {
            'status': 'create study signing table success',
            'student_id': student_id,
            'student_name': student.name,
            'student_seat': seat,
            'date': date,
        }
    return result


def create_all_study_signing_by_date(date):
    """
    Create all student study table in a specific date.
    """
    d = datetime_gen(date)
    students_list = get_study_student_by_day(d.weekday()+1)
    students = students_list['students']

    content = []
    for student in students:
        content.append(create_study_signing_by_student_id(student['id'], student['seat'], date))
    result = {
        'log': content,
        'date': date,
        'status': 'success',
    }
    return result


def create_study_bank_by_student_id(student_id):
    """
    Create study bank for a specific student.
    """
    student = Student.objects.get(id=student_id)
    if StudentStudyBank.objects.filter(owner=student).exists():
        result = {
            'error': 'study bank already exist',
            'student_name': student.name,
        }
    else:
        StudentStudyBank.objects.create(
            owner=student,
        )
        result = {
            'status': 'create study bank success',
            'student_id': student_id,
            'student_name': student.name,
        }
    return result


def create_all_student_bank():
    """
    Create all study bank for students.
    """
    students = Student.objects.all()
    content = []
    for student in students:
        if StudentStudy.objects.filter(owner=student).exists():
            content.append(create_study_bank_by_student_id(student.id))
    result = {
        'log': content,
        'status': 'success',
    }
    return result
