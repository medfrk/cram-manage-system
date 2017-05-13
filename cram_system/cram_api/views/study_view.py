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


class StudyQuizCreateDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who had created their quiz today.
    """
    def get(self, request, date, format=None):
        content = collect_quiz_create_done_list(date)
        return Response(content)


class StudyQuizCreateNotDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who have not created their quiz yet today.
    """
    def get(self, request, date, forma=None):
        content = collect_quiz_create_not_done_list(date)
        return Response(content)


class StudyHomeworkDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who had finished the homework.
    """
    def get(self, request, date, format=None):
        content = collect_homework_done_list(date)
        return Response(content)


class StudyHomeworkNotDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who have not finished the homework yet.
    """
    def get(self, request, date, format=None):
        content = collect_homework_not_done_list(date)
        return Response(content)


class StudyQuizDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who have finished the quiz. 
    """
    def get(self, request, date, format=None):
        content = collect_quiz_done_list(date)
        return Response(content)


class StudyQuizNotDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who have not finished the quiz yet.
    """
    def get(self, request, date, format=None):
        content = collect_quiz_not_done_list(date)
        return Response(content)


class StudyPlanDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who have finished the plan. 
    """
    def get(self, request, date, format=None):
        content = collect_plan_done_list(date)
        return Response(content)


class StudyPlanNotDoneList(generics.RetrieveAPIView):
    """
    Get the list of student who have not finished the plan yet.
    """
    def get(self, request, date, format=None):
        content = collect_plan_not_done_list(date)
        return Response(content)
