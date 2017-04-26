from django.utils import timezone
from django.db import models
from cram_api.models.account_model import Account


class Teacher(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20, default="")
    grade = models.CharField(max_length=100)
    degree_university = models.CharField(max_length=100)
    degree_master = models.CharField(max_length=100, default="")
    degree_doctor = models.CharField(max_length=100, default="")
    resume = models.TextField(default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('created_at', )


class TeacherNote(models.Model):
    owner = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    content = models.TextField(default="")
    created_by = models.ForeignKey(Account)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)


class TeacherArrange(models.Model):
    DAY_CHOICES = (
        ('1', '星期一'),
        ('2', '星期二'),
        ('3', '星期三'),
        ('4', '星期四'),
        ('5', '星期五'),
        ('6', '星期六'),
        ('7', '星期日'),
    )
    POSITION_CHOICES = (
        ('normal', '輔導老師'),
        ('leader', '輔導長'),
    )
    owner = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    day = models.CharField(
        max_length=1,
        choices=DAY_CHOICES,
        default='1',
    )
    position = models.CharField(
        max_length=6,
        choices=POSITION_CHOICES,
        default='normal',
    )
    start_at = models.TimeField(auto_now=False, auto_now_add=False)
    end_at = models.TimeField(auto_now=False, auto_now_add=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    class Meta:
        ordering = ('day', 'position', )
