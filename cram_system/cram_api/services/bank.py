from cram_api.models.course_model import Course
from cram_api.models.student_model import Student
from cram_api.models.student_model import StudentCourseBankLog, StudentCourseBank
from cram_api.models.student_model import StudentStudyBankLog, StudentStudyBank
from cram_api.models.student_model import StudentMealsBankLog, StudentMealsBank

from datetime import datetime



def get_course_bank_log(student_id, course_id, number):
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
