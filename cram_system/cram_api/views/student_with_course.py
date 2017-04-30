from rest_framework import generics
from rest_framework.response import Response
from cram_api.services.student_with_course import *


class StudentInCourseList(generics.RetrieveAPIView):
    """
    List all Students in a specified course.
    """
    def get(self, request, pk, format=None):
        content = GetCourseStudents.get(pk=pk)
        return Response(content)


class StudentInCoursesDayList(generics.RetrieveAPIView):
    """
    List all students of the courses in a specific day.
    """
    def get(self, request, day, format=None):
        content = GetCourseStudentsDay.get(day)
        return Response(content)


class StudentInAllCoursesList(generics.RetrieveAPIView):
    """
    List all students for all courses.
    """
    def get(self, request, format=None):
        content = GetAllCourseStudents.get([1, 2, 3, 4, 5, 6, 7])
        return Response(content)


class StudentSigningTableDayList(generics.RetrieveAPIView):
    """
    List all signing tables in a specific day.
    """
    def get(self, resuest, date, format=None):
        content = GetStudentCourseSigningTable.get(date)
        return Response(content)


class StudentSigningTableDayRangeList(generics.RetrieveAPIView):
    """
    List all signing tables in a day range.
    """
    def get(self, request, date_start, date_end, format=None):
        content = GetStudentCourseSigningTableRange.get(date_start, date_end)
        return Response(content)


class StudentCreateCourseSigning(generics.RetrieveAPIView):
    """
    Create Course signing table for a specific day.
    
    input example : 
    {
        day = 1~7
        date = 2017-4-26
    }
    """
    def get(self, request, day, date, format=None):
        content = CreateCourseSigningTable.create(day, date)
        return Response(content)


class StudentCreateSingleCourseBank(generics.RetrieveAPIView):
    """
    Create course bank for each student for a specific course.
    """
    def get(self, request, pk, format=None):
        content = CreateSingleStudentCourseBank.create(pk)
        return Response(content)


class StudentCreateAllStudentBank(generics.RetrieveAPIView):
    """
    Create course bank for each student for the all courses.
    """
    def get(self, request, format=None):
        content = CreateAllStudentCourseBank.create(arg='')
        return Response(content)



