from django.utils import timezone
from cram_api.models.course_model import Course
from cram_api.models.student_model import StudentCourse, StudentCourseSigning, StudentCourseBank, Student
from datetime import timedelta

"""
Provide Services for the interaction between Student and Course
"""


def datetime_gen(date):
    split_date = date.split("-")
    result = timezone.datetime(
        year=int(split_date[0]),
        month=int(split_date[1]),
        day=int(split_date[2])
    )
    return result


def get_course_student_by_course_id(course_id):
    """
    Get all student in a specific Course by the course id.
    """
    course = Course.objects.get(id=course_id)
    studentsInCourse = StudentCourse.objects.filter(course=course)

    studentList = []
    for studentInCourse in studentsInCourse:
        obj = {
            "id": str(studentInCourse.owner.id),
            "student_name": studentInCourse.owner.name,
            "student_seat": course.space.name,
            "school": studentInCourse.owner.school,
        }
        studentList.append(obj)

    result = {
        "id": str(course.id),
        "space": course.space.name,
        "teacher": course.teacher.name,
        "subject": course.subject,
        "grade": course.grade,
        "day": course.day,
        "student_number": str(course.student_number),
        "start_at": course.start_at,
        "end_at": course.end_at,
        "student_list": studentList,
    }
    return result


def get_all_course_info_by_day(day):
    """

    :param day: 1~7 
    :return: courses basic info for a specific day
    """
    courses = Course.objects.filter(day=day)
    content = []
    if courses.exists():
        for course in courses:
            obj = {
                'course_id': str(course.id),
                'teacher': course.teacher.name,
                'space': course.space.name,
                'subject': course.subject,
                'grade': course.grade,
                'day': course.day,
                'start_at': course.start_at,
                'end_at': course.end_at,
                'student_number': course.student_number,
            }
            content.append(obj)
    result = {
        'day': day,
        'course_list': content,
    }
    return result


def get_all_courses_info():
    """
    
    :return: courses basic info for day 1~7
    """
    day_list = [1, 2, 3, 4, 5, 6, 7]
    content = []

    for day in day_list:
        content.append(get_all_course_info_by_day(day))

    result = {
        'course_basic_info': content,
    }
    return result


def get_course_student_by_day(day):
    """
    Get all students of the course in a specific day.
    """
    courses = Course.objects.filter(day=day)
    content = []
    for course in courses:
        content.append(get_course_student_by_course_id(course.pk))
    result = {
        "courses": content,
        "day": day,
    }
    return result


def get_all_course_student():
    """
    Get all students of the course.
    """
    day_list = [1, 2, 3, 4, 5, 6, 7]

    content = []
    for day in day_list:
        content.append(get_course_student_by_day(day))
    result = {
        "all_courses": content,
    }
    return result


def get_course_signing_by_date(date):
    """
    Get signing table for a specific date.
    """
    d = datetime_gen(date)
    signing_list = StudentCourseSigning.objects.filter(date=d)

    content = []
    for signing in signing_list:
        obj = {
            "id": str(signing.id),
            "name": signing.owner.name,
            "course": signing.course.__str__(),
            "sign": signing.sign,
        }
        content.append(obj)
    result = {
        "signings": content,
        "date": date,
    }
    return result


def get_course_signing_by_date_range(date_start, date_end):
    """
    Get signing table for a specific date range.
    """
    d_start = datetime_gen(date_start)
    d_end = datetime_gen(date_end)

    content = []
    for day in range((d_end - d_start).days):
        date = d_start + timedelta(day)
        content.append(get_course_signing_by_date(date.strftime("%Y-%m-%d")))
    result = {
        "signing_list": content,
        "date_start": date_start,
        "data_end": date_end,
    }
    return result


def get_course_signing_by_date_and_course_id(date, course_id):
    """
    Get course signing tables with a specific date and course id.
    :param date: ex. 2018-01-01
    :param course_id: ex. 1 
    :return: signing list 
    """
    d = datetime_gen(date)
    course = Course.objects.get(id=course_id)
    signing_list = StudentCourseSigning.objects.filter(date=d, course=course)
    content = []
    if signing_list.exists():
        for signing in signing_list:
            obj = {
                'id': str(signing.id),
                'owner_id': str(signing.owner.id),
                'owner_name': signing.owner.name,
                'owner_contact': signing.owner.contact1_name + ' ' + signing.owner.contact1_phone,
                'date': signing.date,
                'sign': signing.sign,
                'leave': signing.leave,
                'updated_at': signing.updated_at,
                'created_at': signing.created_at,
            }
            content.append(obj)
    result = {
        'signing_list': content,
    }
    return result


def get_course_list_by_student_id(student_id):
    student = Student.objects.get(id=student_id)
    courses = StudentCourse.objects.filter(owner=student)
    content = []
    if courses.exists():
        for course in courses:
            obj = {
                'course_id': str(course.course.id),
                'course_grade': course.course.grade,
                'course_subject': course.course.subject,
                'course_teacher': course.course.teacher.name,
                'course_day': course.course.day,
            }
            content.append(obj)
    result = {
        'course_list': content,
        'student_name': student.name,
    }
    return result


def create_course_signing_by_date(date):
    """
    Create course signing tables for students in a specific day. 
    """
    d = datetime_gen(date)
    courses = Course.objects.filter(day=d.weekday()+1)
    content = []
    for course in courses:
        studentsInCourse = StudentCourse.objects.filter(course=course)
        create_log = []
        if studentsInCourse.exists():
            for student in studentsInCourse:
                if StudentCourseSigning.objects.filter(owner=student.owner, course=course, date=d).exists():
                    obj = {
                        'error': 'course signing already exist',
                        'student_id': str(student.owner.id),
                        'student_name': student.owner.name,
                    }
                else:
                    obj = {
                        'status': 'create course signing success',
                        'student_id': str(student.owner.id),
                        'student_name': student.owner.name,
                    }
                    StudentCourseSigning.objects.create(
                        owner=student.owner,
                        course=course,
                        date=d
                    )
                create_log.append(obj)
        course_obj = {
            'create_log': create_log,
            'course_id': course.id,
            'teacher': course.teacher.name,
            'subject': course.subject,
            'day': course.day,
        }
        content.append(course_obj)
    result = {
        'log': content,
    }
    return result


def create_course_bank_by_course_id(course_id):
    """
    Create Course Bank for each student in the Course by course id.
    """
    course = Course.objects.get(id=course_id)
    studentsInCourse = StudentCourse.objects.filter(course=course)
    create_log = []
    for student in studentsInCourse:
        if StudentCourseBank.objects.filter(owner=student.owner, course=course).exists():
            obj = {
                'error': 'course bank already exist',
                'student_id': str(student.owner.id),
                'student_name': student.owner.name,
            }
        else:
            obj = {
                'status': 'create course signing success',
                'student_id': str(student.owner.id),
                'student_name': student.owner.name,
            }
            StudentCourseBank.objects.create(
                owner=student.owner,
                course=course,
                balance=0
            )
        create_log.append(obj)
    result = {
        'create_log': create_log,
        'course_id': course_id,
        'teacher': course.teacher.name,
        'subject': course.subject,
        'day': course.day,
    }
    return result


def create_all_course_bank():
    """
    Create Course Bank for each student for all courses.
    """
    course_list = Course.objects.all()
    content = []
    for course in course_list:
        content.append(create_course_bank_by_course_id(course.id))
    result = {
        'log': content,
        'status': 'success'
    }
    return result


