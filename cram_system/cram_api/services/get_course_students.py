from cram_api.models.course_model import Course
from cram_api.models.student_model import StudentCourse


class GetCourseStudents:
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

        content = {
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
        return content


class GetCourseStudentsDay:
    def get(day):
        courses = Course.objects.filter(day=day)
        content = []
        for course in courses:
            content.append(GetCourseStudents.get(pk=course.pk))
        content = {
            "courses": content,
            "day": day,
        }
        return content


class GetAllCourseStudents:
    def get(day_list):
        content = []
        for day in day_list:
            content.append(GetCourseStudentsDay.get(day))
        content = {
            "all_courses": content,
        }
        return content
