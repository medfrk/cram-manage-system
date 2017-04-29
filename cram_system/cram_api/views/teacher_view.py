from django.utils.timezone import localtime
from rest_framework import generics
from rest_framework.response import Response
from cram_api.models.teacher_model import Teacher, TeacherNote, TeacherArrange
from cram_api.serializers import TeacherSerializer, TeacherNoteSerializer, TeacherArrangeSerializer
from rest_framework import permissions


class TeacherList(generics.ListCreateAPIView):
    """
    List all Teachers, or create a new teacher
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated, )
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an teacher.
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherNoteList(generics.ListCreateAPIView):
    """
    List all Teacher notes, or create a new teacher note.
    """
    queryset = TeacherNote.objects.all()
    serializer_class = TeacherNoteSerializer


class TeacherNoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an teacher note.
    """
    queryset = TeacherNote.objects.all()
    serializer_class = TeacherNoteSerializer


class TeacherArrangeList(generics.ListCreateAPIView):
    """
    List all Teacher arrangements, or create a new teacher arrangement
    """
    queryset = TeacherArrange.objects.all()
    serializer_class = TeacherArrangeSerializer


class TeacherArrangeDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an teacher arrangement.
    """
    queryset = TeacherArrange.objects.all()
    serializer_class = TeacherArrangeSerializer
