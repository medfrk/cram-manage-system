from django.utils import timezone
from cram_api.models.course_model import Course
from cram_api.models.student_model import StudentCourse, StudentCourseSigning, StudentCourseBank
from datetime import timedelta

"""
Provide Services for the interaction between Student and Course
"""


class GetCourseStudents:
    """
    Get all student in a specific Course by the course pk.
    """
    def get(pk):
        course = Course.objects.get(id=pk)
        studentsInCourse = StudentCourse.objects.filter(course=course)

        studentList = []
        for studentInCourse in studentsInCourse:
            obj = {
                "id": str(studentInCourse.owner.id),
                "name": studentInCourse.owner.name,
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


class GetCourseStudentsDay:
    """
    Get all students of the course in a specific day.
    """
    def get(day):
        courses = Course.objects.filter(day=day)
        content = []
        for course in courses:
            content.append(GetCourseStudents.get(pk=course.pk))
        result = {
            "courses": content,
            "day": day,
        }
        return result


class GetAllCourseStudents:
    """
    Get all students of the course in a day range.
    """
    def get(day_list):
        content = []
        for day in day_list:
            content.append(GetCourseStudentsDay.get(day))
        result = {
            "all_courses": content,
        }
        return result


class GetStudentCourseSigningTable:
    """
    Get signing table for a specific date
    """
    def get(date):
        split_date = date.split("-")
        d = timezone.datetime(
            year=int(split_date[0]),
            month=int(split_date[1]),
            day=int(split_date[2])
        )
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


class GetStudentCourseSigningTableRange:
    """
    Get signing table for a specific date range
    """
    def get(date_start, date_end):
        split_date_start = date_start.split("-")
        split_date_end = date_end.split("-")
        d_start = timezone.datetime(
            year=int(split_date_start[0]),
            month=int(split_date_start[1]),
            day=int(split_date_start[2])
        )
        d_end = timezone.datetime(
            year=int(split_date_end[0]),
            month=int(split_date_end[1]),
            day=int(split_date_end[2])
        )
        content = []
        for day in range((d_end - d_start).days):
            date = d_start + timedelta(day)
            content.append(GetStudentCourseSigningTable.get(date.strftime("%Y-%m-%d")))
        result = {
            "signing_list": content,
        }
        return result


class CreateCourseSigningTable:
    """
    Create course signing tables for students in a specific day. 
    """
    def create(day, date):
        courses = Course.objects.filter(day=int(day))
        split_date = date.split("-")
        d = timezone.datetime(
            year=int(split_date[0]),
            month=int(split_date[1]),
            day=int(split_date[2])
        )
        for course in courses:
            studentsInCourse = StudentCourse.objects.filter(course=course)
            for student in studentsInCourse:
                if StudentCourseSigning.objects.filter(owner=student.owner, course=course, date=d).exists():
                    print('already exist')
                else:
                    print('create new signing table')
                    StudentCourseSigning.objects.create(
                        owner=student.owner,
                        course=course,
                        date=d
                    )
        return {'status': 'success'}


class CreateSingleStudentCourseBank:
    """
    Create Course Bank for each student in the Course by course pk.
    """
    def create(pk):
        course = Course.objects.get(id=pk)
        studentsInCourse = StudentCourse.objects.filter(course=course)

        for student in studentsInCourse:
            if StudentCourseBank.objects.filter(owner=student.owner, course=course).exists():
                print('already exist')
            else:
                print('create new course bank')
                StudentCourseBank.objects.create(
                    owner=student.owner,
                    course=course,
                    balance=0
                )
        return {'status': 'success'}


class CreateAllStudentCourseBank:
    """
    Create Course Bank for each student for all courses.
    """
    def create(arg):
        course_list = Course.objects.all()
        for course in course_list:
            CreateSingleStudentCourseBank.create(course.id)
        return {'status': 'success'}
