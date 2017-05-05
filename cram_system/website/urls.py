from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^quiz/$', views.quiz_view),
    url(r'^signing/$', views.signing_view),
    url(r'^signing_absent/$', views.signing_absent_view),
    url(r'^signing_actual/$', views.signing_actual_view),
    url(r'^signing_leave/$', views.signing_leave_view),

]

urlpatterns = format_suffix_patterns(urlpatterns)
