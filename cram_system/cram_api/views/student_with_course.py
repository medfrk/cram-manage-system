from django.utils.timezone import localtime
from rest_framework import generics
from rest_framework.response import Response
from cram_api.models.course_model import Course
from cram_api.models.student_model import StudentCourse, Student
from cram_api.serializers import CourseSerializer
from cram_api.serializers import StudentCourseSerializer, StudentSerializer
from cram_api.services.get_course_students import GetCourseStudents, GetCourseStudentsDay, GetAllCourseStudents


class StudentInCourseList(generics.RetrieveAPIView):
    """
    List all Students in a specified course.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get(self, request, pk, format=None):
        content = GetCourseStudents.get(pk=pk)
        return Response(content)


class StudentInCoursesDayList(generics.RetrieveAPIView):
    """
    List all students of the courses in a specified day.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get(self, request, day, format=None):
        content = GetCourseStudentsDay.get(day)
        return Response(content)


class StudentInAllCoursesList(generics.RetrieveAPIView):
    """
    List all students for all courses.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get(self, request, format=None):
        content = GetAllCourseStudents.get([1, 2, 3, 4, 5, 6, 7])
        return Response(content)


class Test(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get(self, request, pk, format=None):
        content = GetCourseStudents.get(pk=pk)
        content = {
            "class1": content,
            "class2": '12345',
        }
        return Response(content)
