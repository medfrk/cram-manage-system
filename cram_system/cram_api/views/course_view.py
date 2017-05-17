from rest_framework import generics
from rest_framework import permissions

from cram_api.models.course_model import Course, CourseNote
from cram_api.serializers import CourseSerializer, CourseNoteSerializer


class CourseList(generics.ListCreateAPIView):
    """
    List all Course, or create a new course
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an course.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseNoteList(generics.ListCreateAPIView):
    """
    List all Course, or create a new course note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = CourseNote.objects.all()
    serializer_class = CourseNoteSerializer


class CourseNoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an course note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = CourseNote.objects.all()
    serializer_class = CourseNoteSerializer

