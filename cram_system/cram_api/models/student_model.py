from django.utils import timezone
from django.db import models
from cram_api.models.course_model import Course
from cram_api.models.space_model import Space


class Student(models.Model):
    GRADE_CHOICES = {
        ('5', '小五'),
        ('6', '小六'),
        ('7', '國一'),
        ('8', '國二'),
        ('9', '國三'),
        ('10', '高一'),
        ('11', '高二'),
        ('12', '高三'),
    }
    name = models.CharField(max_length=100)
    nickname = models.CharField(max_length=100)
    birthday = models.CharField(max_length=100)
    grade = models.CharField(
        max_length=2,
        choices=GRADE_CHOICES,
        default='7',
    )
    school = models.CharField(max_length=100)
    image = models.CharField(max_length=300, default="")
    phone = models.CharField(max_length=20, default="")
    address = models.CharField(max_length=200, default="")
    left = models.BooleanField(default=False)
    note = models.TextField(default="")
    contact1_name = models.CharField(max_length=100, default="")
    contact1_relationship = models.CharField(max_length=100, default="")
    contact1_phone = models.CharField(max_length=20, default="")
    contact2_name = models.CharField(max_length=100, default="")
    contact2_relationship = models.CharField(max_length=100, default="")
    contact2_phone = models.CharField(max_length=20, default="")
    contact3_name = models.CharField(max_length=100, default="")
    contact3_relationship = models.CharField(max_length=100, default="")
    contact3_phone = models.CharField(max_length=20, default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('grade', 'name', )


class StudentCourse(models.Model):
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    course = models.ForeignKey(Course, on_delete=models.CASCADE,)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentCourseBank(models.Model):
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    course = models.ForeignKey(Course, on_delete=models.CASCADE,)
    balance = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentCourseSigning(models.Model):
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    course = models.ForeignKey(Course, on_delete=models.CASCADE,)
    date = models.DateField(default=timezone.now, editable=True)
    sign = models.BooleanField(default=False)
    leave = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentStudy(models.Model):
    DAY_CHOICES = (
        ('1', '星期一'),
        ('2', '星期二'),
        ('3', '星期三'),
        ('4', '星期四'),
        ('5', '星期五'),
        ('6', '星期六'),
        ('7', '星期日'),
    )
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    seat = models.ForeignKey(Space, on_delete=models.CASCADE,)
    day = models.CharField(
        max_length=1,
        choices=DAY_CHOICES,
        default='1',
    )
    start_at = models.TimeField(auto_now=False, auto_now_add=False)
    end_at = models.TimeField(auto_now=False, auto_now_add=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentStudyBank(models.Model):
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    balance = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentStudySigning(models.Model):
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    seat = models.CharField(max_length=50, default="")
    date = models.DateField(default=timezone.now, editable=True)
    finish_previous = models.BooleanField(default=False)
    sign_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
    sign = models.BooleanField(default=False)
    leave = models.BooleanField(default=False)
    create_quiz_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
    have_create_quiz = models.BooleanField(default=False)
    finish_homework_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
    finish_homework = models.BooleanField(default=False)
    finish_quiz_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
    finish_quiz = models.BooleanField(default=False)
    finish_plan_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
    finish_plan = models.BooleanField(default=False)
    left_at = models.TimeField(default=timezone.now, auto_now=False, auto_now_add=False)
    left = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    class Meta:
        ordering = ('seat', )


class StudentNote(models.Model):
    KIND_CHOICES = (
        ('good', '好'),
        ('normal', '一般'),
        ('bad', '差'),
    )
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    kind = models.CharField(
        max_length=6,
        choices=KIND_CHOICES,
        default='normal',
    )
    content = models.TextField(default="")
    created_by = models.CharField(max_length=50, default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentSibling(models.Model):
    GRADE_CHOICES = {
        ('5', '小五'),
        ('6', '小六'),
        ('7', '國一'),
        ('8', '國二'),
        ('9', '國三'),
        ('10', '高一'),
        ('11', '高二'),
        ('12', '高三'),
    }
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    name = models.CharField(max_length=100)
    grade = models.CharField(
        max_length=2,
        choices=GRADE_CHOICES,
        default='7',
    )
    school = models.CharField(max_length=100)
    phone = models.CharField(max_length=20, default="")
    note = models.TextField(default="")
    contact_name = models.CharField(max_length=100, default="")
    contact_relationship = models.CharField(max_length=100, default="")
    contact_phone = models.CharField(max_length=20, default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentMealsBank(models.Model):
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    money = models.IntegerField(default=0)
    note = models.CharField(max_length=200, default="")
    balance = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentQuiz(models.Model):
    SUBJECT_CHOICES = (
        ('chinese', '國文'),
        ('english', '英文'),
        ('math', '數學'),
        ('physics', '物理'),
        ('chemistry', '化學'),
        ('biology', '生物'),
        ('earth_science', '地科'),
        ('geography', '地理'),
        ('history', '歷史'),
        ('civil_ethics_education', '公民'),
    )
    owner = models.ForeignKey(Student, on_delete=models.CASCADE,)
    date = models.DateField(default=timezone.now, editable=True)
    subject = models.CharField(
        max_length=25,
        choices=SUBJECT_CHOICES,
        default='math',
    )
    range = models.CharField(max_length=200, default="")
    finish = models.BooleanField(default=False)
    score = models.CharField(max_length=3, default="")
    note = models.CharField(max_length=200, default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class StudentPlan(models.Model):
    SUBJECT_CHOICES = (
        ('chinese', '國文'),
        ('english', '英文'),
        ('math', '數學'),
        ('physics', '物理'),
        ('chemistry', '化學'),
        ('biology', '生物'),
        ('earth_science', '地科'),
        ('geography', '地理'),
        ('history', '歷史'),
        ('civil_ethics_education', '公民'),
    )
    owner = models.ForeignKey(Student, on_delete=models.CASCADE, )
    date = models.DateField(default=timezone.now, editable=True)
    subject = models.CharField(
        max_length=25,
        choices=SUBJECT_CHOICES,
        default='math',
    )
    range = models.CharField(max_length=200, default="")
    need_quiz = models.BooleanField(default=False)
    score = models.CharField(max_length=3, default="")
    finish_quiz = models.BooleanField(default=False)
    finish = models.BooleanField(default=False)
    note = models.CharField(max_length=200, default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    class Meta:
        ordering = ('date', )
