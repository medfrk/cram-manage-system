from rest_framework import generics
from rest_framework.response import Response
from cram_api.services.student_with_study import GetStudyStudentsDay, GetAllStudyStudents


class StudentInOneDayList(generics.RetrieveAPIView):
    """
    Get all students in a specific day
    """
    def get(self, request, day, format=None):
        content = GetStudyStudentsDay.get(day)
        return Response(content)


class StudentInAllDayList(generics.RetrieveAPIView):
    """
    Get all students in a day range.
    """
    def get(self, request, format=None):
        content = GetAllStudyStudents.get([1, 2, 3, 4, 5, 6, 7])
        return Response(content)



