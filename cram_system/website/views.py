from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET'])
def index_view(requests):
    return render(request=requests, template_name='index.html')


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

