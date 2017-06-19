import simplejson as json

from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from cram_api.models.course_model import Course
from cram_api.models.student_model import Student

from cram_api.services.note import *


class CreateCourseNote(generics.CreateAPIView):
    """
    Create Course Note.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = CourseNote.objects.all()

    def create(self, request, *args, **kwargs):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        course = Course.objects.get(id=body['owner'])
        CourseNote.objects.create(
            owner=course,
            content=body['content'],
            created_by=request.user.username,
        )

        result = {
            'log': 'create course note'
        }

        return Response(result)


class CreateStudentNote(generics.CreateAPIView):
    """
    Create Student Note.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = StudentNote.objects.all()

    def create(self, request, *args, **kwargs):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        student = Student.objects.get(id=body['owner'])
        StudentNote.objects.create(
            owner=student,
            kind=body['kind'],
            content=body['content'],
            created_by=request.user.username,
        )

        result = {
            'log': 'create student note'
        }

        return Response(result)


class GetStudentNote(generics.RetrieveAPIView):
    """
    Get Student Notes.
    """
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = StudentNote.objects.all()

    def get(self, request, student_id, number, format=None):
        student = Student.objects.get(id=student_id)
        notes = StudentNote.objects.filter(owner=student).order_by('-created_at')[:int(number)]
        note_list = []
        for note in notes:
            obj = {
                'id': str(note.id),
                'kind': note.kind,
                'content': note.content,
                'created_by': note.created_by,
                'created_at': str(note.created_at).split(' ')[0],
            }
            note_list.append(obj)

        result = {
            'student_name': student.name,
            'note_list': note_list,
        }

        return Response(result)


class GetStudentNoteByDate(generics.RetrieveAPIView):
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = StudentNote.objects.all()

    def get(self, request, date, format=None):
        content = get_student_note_by_date(date)
        return Response(content)


class GetCourseNoteByDate(generics.RetrieveAPIView):
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,
                          permissions.IsAuthenticated,)
    queryset = CourseNote.objects.all()

    def get(self, request, date, format=None):
        content = get_course_note_by_date(date)
        return Response(content)