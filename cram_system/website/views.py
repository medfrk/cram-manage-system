from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET'])
def index_view(requests):
    return render(request=requests, template_name='index.html')


@api_view(['GET'])
def quiz_view(requests):
    return render(request=requests, template_name='quiz.html')


@api_view(['GET'])
def signing_view(requests):
    return render(request=requests, template_name='signing.html')


@api_view(['GET'])
def signing_absent_view(requests):
    return render(request=requests, template_name='signing_absent.html')


@api_view(['GET'])
def signing_actual_view(requests):
    return render(request=requests, template_name='signing_actual.html')


@api_view(['GET'])
def signing_leave_view(requests):
    return render(request=requests, template_name='signing_leave.html')


@api_view(['GET'])
def quiz_create_expect_view(requests):
    return render(request=requests, template_name='quiz_create_expect.html')


@api_view(['GET'])
def quiz_create_done_view(requests):
    return render(request=requests, template_name='quiz_create_done.html')


@api_view(['GET'])
def quiz_create_not_done_view(requests):
    return render(request=requests, template_name='quiz_create_not_done.html')


@api_view(['GET'])
def create_quiz_view(requests):
    return render(request=requests, template_name='create_quiz.html')


@api_view(['GET'])
def homework_expect_view(requests):
    return render(request=requests, template_name='homework_expect.html')


@api_view(['GET'])
def homework_done_view(requests):
    return render(request=requests, template_name='homework_done.html')


@api_view(['GET'])
def homework_not_done_view(requests):
    return render(request=requests, template_name='homework_not_done.html')


@api_view(['GET'])
def quiz_expect_view(requests):
    return render(request=requests, template_name='quiz_expect.html')


@api_view(['Get'])
def quiz_done_view(requests):
    return render(request=requests, template_name='quiz_done.html')


@api_view(['GET'])
def quiz_not_done_view(requests):
    return render(request=requests, template_name='quiz_not_done.html')
