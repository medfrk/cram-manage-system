from django.utils import timezone
from django.db import models
from cram_api.models.teacher_model import Teacher
from cram_api.models.space_model import Space


class Course(models.Model):
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
    DAY_CHOICES = (
        ('1', '星期一'),
        ('2', '星期二'),
        ('3', '星期三'),
        ('4', '星期四'),
        ('5', '星期五'),
        ('6', '星期六'),
        ('7', '星期日'),
    )
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,)
    space = models.ForeignKey(Space, on_delete=models.CASCADE,)
    subject = models.CharField(
        max_length=25,
        choices=SUBJECT_CHOICES,
        default='math',
    )
    grade = models.CharField(
        max_length=2,
        choices=GRADE_CHOICES,
        default='7',
    )
    day = models.CharField(
        max_length=1,
        choices=DAY_CHOICES,
        default='1',
    )
    start_at = models.TimeField(auto_now=False, auto_now_add=False)
    end_at = models.TimeField(auto_now=False, auto_now_add=False)
    student_number = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    def __str__(self):
        return str(self.teacher.name + " 星期" + self.day + " 科目:" + self.subject)

    class Meta:
        ordering = ('day', 'start_at', 'created_at', )


class CourseNote(models.Model):
    owner = models.ForeignKey(Course, on_delete=models.CASCADE)
    content = models.TextField(default="")
    created_by = models.CharField(max_length=50, default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    class Meta:
        ordering = ('owner', 'created_at', )
