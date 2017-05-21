from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from cram_api.models.course_model import Course, CourseNote
from cram_api.serializers import CourseSerializer, CourseNoteSerializer


class CourseList(generics.ListCreateAPIView):
    """
    List all Course, or create a new course
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)

    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an course.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)

    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseNoteList(generics.ListCreateAPIView):
    """
    List all Course, or create a new course note.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)

    queryset = CourseNote.objects.all()
    serializer_class = CourseNoteSerializer

    def create(self, request, *args, **kwargs):
        print(request.user.username)
        print(request.body)

        return Response([])


class CourseNoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an course note.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)

    queryset = CourseNote.objects.all()
    serializer_class = CourseNoteSerializer


