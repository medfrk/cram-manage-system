from django.utils import timezone
from django.db import models


class Space(models.Model):
    KIND_CHOICES = (
        ('classroom', '教室'),
        ('study_room', '自習室')
    )
    name = models.CharField(max_length=100)
    kind = models.CharField(
        max_length=10,
        choices=KIND_CHOICES,
        default='study_room',
    )
    capacity = models.CharField(max_length=20)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('kind', 'name', )


class SpaceNote(models.Model):
    owner = models.ForeignKey(Space, on_delete=models.CASCADE)
    content = models.TextField(default="")
    created_by = models.CharField(max_length=50, default="")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)
