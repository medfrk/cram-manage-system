from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^quiz/$', views.quiz_view),
    url(r'^signing/$', views.signing_view)
]

urlpatterns = format_suffix_patterns(urlpatterns)
