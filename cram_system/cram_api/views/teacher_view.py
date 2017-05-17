from rest_framework import generics
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
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherNoteList(generics.ListCreateAPIView):
    """
    List all Teacher notes, or create a new teacher note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = TeacherNote.objects.all()
    serializer_class = TeacherNoteSerializer


class TeacherNoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an teacher note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = TeacherNote.objects.all()
    serializer_class = TeacherNoteSerializer


class TeacherArrangeList(generics.ListCreateAPIView):
    """
    List all Teacher arrangements, or create a new teacher arrangement
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = TeacherArrange.objects.all()
    serializer_class = TeacherArrangeSerializer


class TeacherArrangeDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an teacher arrangement.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = TeacherArrange.objects.all()
    serializer_class = TeacherArrangeSerializer
