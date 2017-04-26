from django.db import models
from django.utils import timezone


class Account(models.Model):
    name = models.CharField(max_length=100, default="")
    email = models.EmailField()
    password = models.CharField(max_length=254)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('created_at',)
