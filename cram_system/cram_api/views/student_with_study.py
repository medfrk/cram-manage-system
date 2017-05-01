from rest_framework import generics
from rest_framework.response import Response
from cram_api.services.student_with_study import *


class StudentInOneDayList(generics.RetrieveAPIView):
    """
    Get all students in a specific day
    """
    def get(self, request, day, format=None):
        content = get_study_student_by_day(day)
        return Response(content)


class StudentInAllDayList(generics.RetrieveAPIView):
    """
    Get all students in a day range.
    """
    def get(self, request, format=None):
        content = get_all_study_student()
        return Response(content)


class StudentDailySigningList(generics.RetrieveAPIView):
    """
    Get all study signing tables in a specific date.
    """
    def get(self, request, date, format=None):
        content = get_study_signing_by_date(date)
        return Response(content)


class StudentRangeSigningList(generics.RetrieveAPIView):
    """
    Get all study signing tables in a date range.
    """
    def get(self, request, date_start, date_end, format=None):
        content = get_study_signing_by_date_range(date_start, date_end)
        return Response(content)


class StudentStudyBankList(generics.RetrieveAPIView):
    """
    Get student's study bank by student id.
    """
    def get(self, request, student_id, format=None):
        content = get_study_bank_by_student_id(student_id)
        return Response(content)


class StudentStudyBankAllList(generics.RetrieveAPIView):
    """
    Get all students' study bank.
    """
    def get(self, request, format=None):
        content = get_all_study_bank()
        return Response(content)


class CreateStudySigningTable(generics.RetrieveAPIView):
    """
    Create Study Signing table for a specific date.
    """
    def get(self, request, student_id, date, format=None):
        content = create_study_signing_by_student_id(student_id, date)
        return Response(content)


class CreateAllStudySigningTable(generics.RetrieveAPIView):
    """
    Create all Study Signing table for a specific date.
    """
    def get(self, request, date, format=None):
        content = create_all_study_signing_by_date(date)
        return Response(content)


class CreateAllStudentStudyBank(generics.RetrieveAPIView):
    """
    Create study bank for all students.
    """
    def get(self, request, format=None):
        content = create_all_student_bank()
        return Response(content)
