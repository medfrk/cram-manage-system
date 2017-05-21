from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.

from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class Logout(APIView):
    queryset = User.objects.all()

    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
def index_view(requests):
    return render(request=requests, template_name='index.html')


@api_view(['GET'])
def all_course_view(requests):
    return render(request=requests, template_name='all_course.html')


@api_view(['GET'])
def quiz_list_view(requests):
    return render(request=requests, template_name='quiz_list.html')


@api_view(['GET'])
def signing_view(requests):
    return render(request=requests, template_name='signing.html')


@api_view(['GET'])
def create_quiz_view(requests):
    return render(request=requests, template_name='create_quiz.html')


@api_view(['GET'])
def finish_quiz_view(requests):
    return render(request=requests, template_name='finish_quiz.html')


@api_view(['GET'])
def plan_view(requests):
    return render(request=requests, template_name='plan.html')


@api_view(['GET'])
def plan_search_view(requests):
    return render(request=requests, template_name='plan_search.html')


@api_view(['GET'])
def plan_create_view(requests):
    return render(request=requests, template_name='plan_create.html')


@api_view(['GET'])
def plan_finish_view(requests):
    return render(request=requests, template_name='finish_plan.html')


@api_view(['GET'])
def left_view(requests):
    return render(request=requests, template_name='left.html')


@api_view(['GET'])
def homework_view(requests):
    return render(request=requests, template_name='homework.html')


@api_view(['GET'])
def quiz_create_view(requests):
    return render(request=requests, template_name='quiz_create.html')


@api_view(['GET'])
def quiz_view(requests):
    return render(request=requests, template_name='quiz.html')


@api_view(['GET'])
def plan_for_today_view(requests):
    return render(request=requests, template_name='plan_for_today.html')


@api_view(['GET'])
def note_course_view(requests):
    return render(request=requests, template_name='note_course.html')

