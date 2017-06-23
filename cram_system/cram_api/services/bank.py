from django.utils import timezone

from cram_api.models.course_model import Course
from cram_api.models.student_model import Student, StudentStudySigning, StudentCourseSigning
from cram_api.models.student_model import StudentCourseBankLog, StudentCourseBank
from cram_api.models.student_model import StudentStudyBankLog, StudentStudyBank
from cram_api.models.student_model import StudentMealsBankLog, StudentMealsBank


def datetime_gen(date):
    split_date = date.split("-")
    result = timezone.datetime(
        year=int(split_date[0]),
        month=int(split_date[1]),
        day=int(split_date[2])
    )
    return result


def get_course_bank_log(course_id, student_id, number):
    """
    Get Student Course Bank Log. 
    :param course_id:
    :param student_id: 
    :param number: how many log you want to get.
    :return: Log list.
    """
    if int(number) < 0:
        return {'log_list': []}

    student = Student.objects.get(id=student_id)
    course = Course.objects.get(id=course_id)
    logs = StudentCourseBankLog.objects.filter(owner=student, course=course).order_by('-created_at')[:int(number)]

    log_list = []
    for log in logs:
        obj = {
            'id': str(log.id),
            'balance': log.balance,
            'money': log.money,
            'note': log.note,
            'created_at': str(log.created_at).split(' ')[0],
        }
        log_list.append(obj)

    result = {
        'student_name': student.name,
        'course': course.__str__(),
        'log_list': log_list,
    }

    return result


def get_study_bank_log(student_id, number):
    """
    Get Student Study Bank Log. 
    :param student_id: 
    :param number: how many log you want to get.
    :return: Log list.
    """
    if int(number) < 0:
        return {'log_list': []}

    student = Student.objects.get(id=student_id)
    logs = StudentStudyBankLog.objects.filter(owner=student).order_by('-created_at')[:int(number)]

    log_list = []
    for log in logs:
        obj = {
            'id': str(log.id),
            'balance': log.balance,
            'money': log.money,
            'note': log.note,
            'created_at': str(log.created_at).split(' ')[0],
        }
        log_list.append(obj)

    result = {
        'student_name': student.name,
        'log_list': log_list,
    }

    return result


def get_meals_bank_log(student_id, number):
    """
    Get Student Meals Bank Log. 
    :param student_id: 
    :param number: how many log you want to get.
    :return: Log list.
    """
    if int(number) < 0:
        return {'log_list': []}

    student = Student.objects.get(id=student_id)
    logs = StudentMealsBankLog.objects.filter(owner=student).order_by('-created_at')[:int(number)]

    log_list = []
    for log in logs:
        obj = {
            'id': str(log.id),
            'balance': log.balance,
            'money': log.money,
            'note': log.note,
            'created_at': str(log.created_at).split(' ')[0],
        }
        log_list.append(obj)

    result = {
        'student_name': student.name,
        'log_list': log_list,
    }

    return result


def get_study_bank(student_id):
    """
    Get study bank info by student_id.
    :param student_id: 
    :return: Information of student's study bank.
    """
    student = Student.objects.get(id=student_id)
    bank = StudentStudyBank.objects.get(owner=student)
    result = {
        'bank_id': str(bank.id),
        'balance': bank.balance,
    }

    return result


def get_meals_bank(student_id):
    """
    Get meals bank info by student_id.
    :param student_id: 
    :return: Information of student's meals bank.
    """
    student = Student.objects.get(id=student_id)
    bank = StudentMealsBank.objects.get(owner=student)
    result = {
        'bank_id': str(bank.id),
        'balance': bank.balance,
    }

    return result


def get_course_bank(course_id, student_id):
    """
    Get course bank info by course_id, student_id.
    :param course_id:
    :param student_id: 
    :return: Information of student's course bank.
    """
    student = Student.objects.get(id=student_id)
    course = Course.objects.get(id=course_id)
    bank = StudentCourseBank.objects.get(owner=student, course=course)
    result = {
        'bank_id': str(bank.id),
        'balance': bank.balance,
    }

    return result


def study_bank_settlement_by_date(date):
    """
    Update the student's study bank by the signing table.
    :param date: 
    :return: log
    """
    d = datetime_gen(date)
    signing_list = StudentStudySigning.objects.filter(date=d, sign=True, settlement=False)
    for signing in signing_list:
        signing.settlement = True
        signing.save()

        student = signing.owner

        # Bank
        bank = StudentStudyBank.objects.get(owner=student)
        bank.balance = bank.balance - 1
        bank.save()

        # Bank log
        StudentStudyBankLog.objects.create(
            owner=student,
            balance=-1,
            money=0,
            note='自習'
        )

    result = {
        'log': 'done'
    }

    return result


def course_bank_settlement_by_date(date):
    """
    Update the student's course bank by the signing table.
    :param date: 
    :return: log
    """
    d = datetime_gen(date)
    signing_list = StudentCourseSigning.objects.filter(date=d, sign=True, settlement=False)
    for signing in signing_list:
        signing.settlement = True
        signing.save()

        student = signing.owner
        course = signing.course

        # Bank
        bank = StudentCourseBank.objects.get(owner=student, course=course)
        bank.balance = bank.balance - 1
        bank.save()

        # Bank log
        StudentCourseBankLog.objects.create(
            owner=student,
            course=course,
            balance=-1,
            money=0,
            note='上課'
        )

    result = {
        'log': 'done'
    }

    return result
