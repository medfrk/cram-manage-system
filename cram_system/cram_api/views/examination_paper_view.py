from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from cram_api.services.examination_paper import *


class GetPlansBySubjectAndDateRange(generics.RetrieveAPIView):
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = StudentPlan.objects.all()

    def get(self, request, subject, date_start, date_end, format=None):
        content = get_plans_by_subject_and_date_range(subject, date_start, date_end)
        return Response(content)


class GetQuizzesByDate(generics.RetrieveAPIView):
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = StudentQuiz.objects.all()

    def get(self, request, date, format=None):
        content = get_quizzes_by_date(date)
        return Response(content)
