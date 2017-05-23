from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from cram_api.services.bank import *


class StudyBankLogList(generics.RetrieveAPIView):
    """
    Get student study bank log
    """
    def get(self, request, student_id, number, format=None):
        content = get_study_bank_log(student_id, number)
        return Response(content)


class CourseBankLogList(generics.RetrieveAPIView):
    """
    Get student course bank log
    """
    def get(self, request, student_id, course_id, number, format=None):
        content = get_course_bank_log(student_id, course_id, number)
        return Response(content)


class MealsBankLogList(generics.RetrieveAPIView):
    """
    Get student meals bank log
    """
    def get(self, request, student_id, number, format=None):
        content = get_meals_bank_log(student_id, number)
        return Response(content)


class GetStudyBank(generics.RetrieveAPIView):
    """
    Get student study bank by student id.
    """
    def get(self, request, student_id, format=None):
        content = get_study_bank(student_id)
        return Response(content)


class GetMealsBank(generics.RetrieveAPIView):
    """
    Get student meals bank by student id.
    """
    def get(self, request, student_id, format=None):
        content = get_meals_bank(student_id)
        return Response(content)
