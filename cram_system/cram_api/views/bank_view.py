import simplejson as json

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
    def get(self, request, course_id, student_id, number, format=None):
        content = get_course_bank_log(course_id, student_id, number)
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


class GetCourseBank(generics.RetrieveAPIView):
    """
    Get student course bank by course_id & student id.
    """
    def get(self, request, course_id, student_id, format=None):
        content = get_course_bank(course_id, student_id)
        return Response(content)


class StudyBankSettlement(generics.CreateAPIView):
    """
    Update the bank and create bank's log by date.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = StudentStudyBank.objects.all()

    def create(self, request, *args, **kwargs):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        result = study_bank_settlement_by_date(body['date'])

        return Response(result)


class CourseBankSettlement(generics.CreateAPIView):
    """
    Update the bank and create bank's log by date.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = StudentCourseBank.objects.all()

    def create(self, request, *args, **kwargs):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        result = course_bank_settlement_by_date(body['date'])

        return Response(result)
