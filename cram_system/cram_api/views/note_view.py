import simplejson as json

from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from cram_api.models.course_model import CourseNote, Course
from cram_api.models.student_model import StudentNote, Student


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
