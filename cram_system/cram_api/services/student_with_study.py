from django.utils import timezone
from cram_api.models.student_model import StudentStudy


class GetStudyStudentsDay:
    """
    Get all students in a specific day
    """
    def get(day):
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


class GetAllStudyStudents:
    """
    Get all students in a day range.
    """
    def get(day_list):
        content = []
        for day in day_list:
            content.append(GetStudyStudentsDay.get(day))
        result = {
            "all_students": content,
        }
        return result
