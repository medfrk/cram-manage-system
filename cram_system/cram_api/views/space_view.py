from rest_framework import generics
from rest_framework import permissions

from cram_api.models.space_model import Space, SpaceNote
from cram_api.serializers import SpaceSerializer, SpaceNoteSerializer


class SpaceList(generics.ListCreateAPIView):
    """
    List all Course, or create a new space
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = Space.objects.all()
    serializer_class = SpaceSerializer


class SpaceDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an space.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = Space.objects.all()
    serializer_class = SpaceSerializer


class SpaceNoteList(generics.ListCreateAPIView):
    """
    List all Space notes, or create a new space note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = SpaceNote.objects.all()
    serializer_class = SpaceNoteSerializer


class SpaceNoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an space note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = SpaceNote.objects.all()
    serializer_class = SpaceNoteSerializer

