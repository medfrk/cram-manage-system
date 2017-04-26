from django.utils.timezone import localtime
from rest_framework import generics
from rest_framework.response import Response
from cram_api.models.course_model import Course, CourseNote
from cram_api.serializers import CourseSerializer, CourseNoteSerializer


class CourseList(generics.ListCreateAPIView):
    """
    List all Course, or create a new course
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an course.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseNoteList(generics.ListCreateAPIView):
    """
    List all Course, or create a new course note.
    """
    queryset = CourseNote.objects.all()
    serializer_class = CourseNoteSerializer


class CourseNoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an course note.
    """
    queryset = CourseNote.objects.all()
    serializer_class = CourseNoteSerializer

