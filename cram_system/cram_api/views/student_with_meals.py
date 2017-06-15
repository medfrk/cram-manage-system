from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response
from cram_api.services.student_with_meals import *


class CreateAllStudentMealsBank(generics.RetrieveAPIView):
    """
    Create meals bank for all students.
    """
    def get(self, request, format=None):
        content = create_all_meals_bank()
        return Response(content)