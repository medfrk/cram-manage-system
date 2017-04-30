from django.utils import timezone
from cram_api.models.student_model import Student, StudentStudy, StudentStudySigning, StudentStudyBank, StudentPlan
from datetime import timedelta

"""
Provide Services for the interaction between Student and Study
"""


class GetDailyStudyStudents:
    """
    Get all study students in a specific day.
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
    Get all study students in a day range.
    """
    def get(day_list):
        content = []
        for day in day_list:
            content.append(GetDailyStudyStudents.get(day))
        result = {
            "all_students": content,
        }
        return result


class GetDailyStudySigningTable:
    """
    Get student's signing table for a specific day.
    """
    def get(date):
        split_date = date.split("-")
        d = timezone.datetime(
            year=int(split_date[0]),
            month=int(split_date[1]),
            day=int(split_date[2])
        )
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


class GetRangeStudySigningTable:
    """
    Get student's signing table for a date range.
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
            content.append(GetDailyStudySigningTable.get(date.strftime("%Y-%m-%d")))
        result = {
            "signing_list": content,
            "date_start": date_start,
            "data_end": date_end,
        }
        return result


class GetStudyBankByStudentId:
    """
    Get Student's Study Bank by student id.
    """
    def get(id):
        student = Student.objects.get(id=id)
        if StudentStudyBank.objects.filter(owner=student).exists():
            bank = StudentStudyBank.objects.get(owner=student)
            result = {
                "id": str(bank.id),
                "owner": id,
                "balance": bank.balance,
            }
        else:
            result = {
                "owner": id,
                "error": "this study bank does not exist"
            }
        return result


class GetAllStudyBank:
    """
    Get All Students' Study Bank.
    """
    def get(arg):
        students = Student.objects.all()
        bank_list = []
        for student in students:
            bank_list.append(GetStudyBankByStudentId.get(student.id))
        result = {
            "bank_list": bank_list
        }
        return result


class CreateStudySigningTableByStudentId:
    """
    Create Study Signing Table for a specific student by student id and date.
    """
    def create(student_id, date):
        student = Student.objects.get(id=student_id)
        split_date = date.split("-")
        d = timezone.datetime(
            year=int(split_date[0]),
            month=int(split_date[1]),
            day=int(split_date[2])
        )
        filter_start = d - timedelta(7)
        filter_end = d - timedelta(1)
        finish_previous_plan = True
        if StudentPlan.objects.filter(owner=student, finish=False, date__range=[filter_start, filter_end]).exists():
            finish_previous_plan = False
        if StudentStudySigning.objects.filter(owner=student, date=d).exists():
            result = {
                'error': 'study signing table already exist',
                'student': student.name,
            }
        else:
            StudentStudySigning.objects.create(
                owner=student,
                date=d,
                finish_previous=finish_previous_plan,
            )
            result = {
                'status': 'create study signing table success',
                'student_id': student_id,
                'date': date,
            }
        return result


class CreateAllStudySigningTableByDate:
    """
    Create all student study table in a specific date
    """
    def create(date):
        split_date = date.split("-")
        d = timezone.datetime(
            year=int(split_date[0]),
            month=int(split_date[1]),
            day=int(split_date[2])
        )
        students_list = GetDailyStudyStudents.get(d.weekday()+1)
        students = students_list['students']
        content = []
        for student in students:
            content.append(CreateStudySigningTableByStudentId.create(student['id'], date))
        result = {
            'log': content,
            'date': date,
            'status': 'success'
        }
        return result

