from rest_framework import generics
from rest_framework import permissions

from cram_api.models.student_model import Student, StudentNote, StudentSibling
from cram_api.models.student_model import StudentQuiz, StudentPlan, StudentMealsBank
from cram_api.models.student_model import StudentStudy, StudentStudySigning, StudentStudyBank
from cram_api.models.student_model import StudentCourse, StudentCourseSigning, StudentCourseBank

from cram_api.serializers import StudentSerializer, StudentNoteSerializer, StudentSiblingSerializer
from cram_api.serializers import StudentQuizSerializer, StudentPlanSerializer, StudentMealsBankSerializer
from cram_api.serializers import StudentStudySerializer, StudentStudySigningSerializer, StudentStudyBankSerializer
from cram_api.serializers import StudentCourseSerializer, StudentCourseSigningSerializer, StudentCourseBankSerializer



class StudentList(generics.ListCreateAPIView):
    """
    List all students, or create a new student.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentNoteList(generics.ListCreateAPIView):
    """
    List all student notes, or create a new student note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentNote.objects.all()
    serializer_class = StudentNoteSerializer


class StudentNoteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student note.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentNote.objects.all()
    serializer_class = StudentNoteSerializer


class StudentSiblingList(generics.ListCreateAPIView):
    """
    List all student siblings, or create a new student sibling.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentSibling.objects.all()
    serializer_class = StudentSiblingSerializer


class StudentSiblingDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student sibling.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentSibling.objects.all()
    serializer_class = StudentSiblingSerializer


class StudentQuizList(generics.ListCreateAPIView):
    """
    List all student quiz, or create a new student quiz.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentQuiz.objects.all()
    serializer_class = StudentQuizSerializer


class StudentQuizDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student quiz.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentQuiz.objects.all()
    serializer_class = StudentQuizSerializer


class StudentPlanList(generics.ListCreateAPIView):
    """
    List all student plans, or create a new student plan.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentPlan.objects.all()
    serializer_class = StudentPlanSerializer


class StudentPlanDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student plan.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentPlan.objects.all()
    serializer_class = StudentPlanSerializer


class StudentMealsBankList(generics.ListCreateAPIView):
    """
    List all student meals banks, or create a new student meals bank.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentMealsBank.objects.all()
    serializer_class = StudentMealsBankSerializer


class StudentMealsBankDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student meals bank.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentMealsBank.objects.all()
    serializer_class = StudentMealsBankSerializer


class StudentStudyList(generics.ListCreateAPIView):
    """
    List all student studies, or create a new student study.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentStudy.objects.all()
    serializer_class = StudentStudySerializer


class StudentStudyDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student study.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentStudy.objects.all()
    serializer_class = StudentStudySerializer


class StudentStudySigningList(generics.ListCreateAPIView):
    """
    List all student study signings, or create a new student study signing.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentStudySigning.objects.all()
    serializer_class = StudentStudySigningSerializer


class StudentStudySigningDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student study signing.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentStudySigning.objects.all()
    serializer_class = StudentStudySigningSerializer


class StudentStudyBankList(generics.ListCreateAPIView):
    """
    List all student study bank, or create a new student study bank.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentStudyBank.objects.all()
    serializer_class = StudentStudyBankSerializer


class StudentStudyBankDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student study bank.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentStudyBank.objects.all()
    serializer_class = StudentStudyBankSerializer


class StudentCourseList(generics.ListCreateAPIView):
    """
    List all student courses, or create a new student course.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentCourse.objects.all()
    serializer_class = StudentCourseSerializer


class StudentCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student course.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentCourse.objects.all()
    serializer_class = StudentCourseSerializer


class StudentCourseSigningList(generics.ListCreateAPIView):
    """
    List all student course signings, or create a new student course signing.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentCourseSigning.objects.all()
    serializer_class = StudentCourseSigningSerializer


class StudentCourseSigningDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student course signing.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentCourseSigning.objects.all()
    serializer_class = StudentCourseSigningSerializer


class StudentCourseBankList(generics.ListCreateAPIView):
    """
    List all student course bank, or create a new student course bank.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentCourseBank.objects.all()
    serializer_class = StudentCourseBankSerializer


class StudentCourseBankDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a student course bank.
    """
    permission_classes = permissions.DjangoModelPermissionsOrAnonReadOnly
    queryset = StudentCourseBank.objects.all()
    serializer_class = StudentCourseBankSerializer
