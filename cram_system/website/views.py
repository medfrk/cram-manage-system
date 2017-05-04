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
