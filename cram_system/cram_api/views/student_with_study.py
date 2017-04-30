from rest_framework import generics
from rest_framework.response import Response
from cram_api.services.student_with_study import *


class StudentInOneDayList(generics.RetrieveAPIView):
    """
    Get all students in a specific day
    """
    def get(self, request, day, format=None):
        content = GetDailyStudyStudents.get(day)
        return Response(content)


class StudentInAllDayList(generics.RetrieveAPIView):
    """
    Get all students in a day range.
    """
    def get(self, request, format=None):
        content = GetAllStudyStudents.get([1, 2, 3, 4, 5, 6, 7])
        return Response(content)


class StudentDailySigningList(generics.RetrieveAPIView):
    """
    Get all study signing tables in a specific date.
    """
    def get(self, request, date, format=None):
        content = GetDailyStudySigningTable.get(date)
        return Response(content)


class StudentRangeSigningList(generics.RetrieveAPIView):
    """
    Get all study signing tables in a date range.
    """
    def get(self, request, date_start, date_end, format=None):
        content = GetRangeStudySigningTable.get(date_start, date_end)
        return Response(content)


class StudentStudyBankList(generics.RetrieveAPIView):
    """
    Get student's study bank by student id.
    """
    def get(self, request, id, format=None):
        content = GetStudyBankByStudentId.get(id)
        return Response(content)


class StudentStudyBankAllList(generics.RetrieveAPIView):
    """
    Get all students' study bank.
    """
    def get(self, request, format=None):
        content = GetAllStudyBank.get(arg='')
        return Response(content)


class CreateStudySigningTable(generics.RetrieveAPIView):
    """
    Create Study Signing table for a specific date.
    """
    def get(self, request, student_id, date, format=None):
        content = CreateStudySigningTableByStudentId.create(student_id, date)
        return Response(content)


class CreateAllStudySigningTable(generics.RetrieveAPIView):
    """
    Create all Study Signing table for a specific date.
    """
    def get(self, request, date, format=None):
        content = CreateAllStudySigningTableByDate.create(date)
        return Response(content)