from rest_framework import generics
from rest_framework.response import Response
from cram_api.services.study_for_this_day import *


class StudyManageList(generics.RetrieveAPIView):
    """
    Get the number report for the usage of managing the study student.
    You will get the information below:
    {
      signingActual: {some number}, 
      signingExpect: {some number},
      signingAbsent: {some number},
      signingLeave: {some number},
      quizCreateExpect: {some number},
      quizCreateDone: {some number},
      quizCreateNotDone: {some number},
      homeworkExpect: {some number},
      homeworkDone: {some number},
      homeworkNotDone: {some number},
      quizExpect: {some number},
      quizDone: {some number},
      quizNotDone: {some number},
      planExpect: {some number},
      planDone: {some number},
      planNotDone: {some number},
      leftExpect: {some number},
      leftCanGo: {some number},
      leftDone: {some number},
      leftNotDone: {some number},
    }
    """
    def get(self, request, date, format=None):
        content = collect_the_study_number_report(date)
        return Response(content)


class StudySigningExpectList(generics.RetrieveAPIView):
    """
    Get the list of student who should study today.
    """
    def get(self, request, date, format=None):
        content = collect_signing_expect_list(date)
        return Response(content)


class StudySigningAbsentList(generics.RetrieveAPIView):
    """
    Get the list of student who is absent today.
    """
    def get(self, request, date, format=None):
        content = collect_signing_absent_list(date)
        return Response(content)


class StudySigningActualList(generics.RetrieveAPIView):
    """
    Get the list of student who had signed today.
    """
    def get(self, request, date, format=None):
        content = collect_signing_actual_list(date)
        return Response(content)


class StudySigningLeaveList(generics.RetrieveAPIView):
    """
    Get the list of student who take a day off today.
    """
    def get(self, request, date, format=None):
        content = collect_signing_leave_list(date)
        return Response(content)

