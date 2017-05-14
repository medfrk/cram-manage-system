from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^plan/$', views.plan_view),
    url(r'^plan_create/$', views.plan_create_view),
    url(r'^plan_search/$', views.plan_search_view),
    url(r'^plan_finish/$', views.plan_finish_view),
    url(r'^quiz_list/$', views.quiz_list_view),
    url(r'^signing/$', views.signing_view),
    url(r'^signing_absent/$', views.signing_absent_view),
    url(r'^signing_actual/$', views.signing_actual_view),
    url(r'^signing_leave/$', views.signing_leave_view),
    url(r'^create_quiz/$', views.create_quiz_view),
    url(r'^finish_quiz/$', views.finish_quiz_view),
    url(r'^plan_expect/$', views.plan_expect_view),
    url(r'^plan_done/$', views.plan_done_view),
    url(r'^plan_not_done/$', views.plan_not_done_view),
    url(r'^left/$', views.left_view),
    url(r'^homework/$', views.homework_view),
    url(r'^quiz_create/$', views.quiz_create_view),
    url(r'^quiz/$', views.quiz_view),
]

urlpatterns = format_suffix_patterns(urlpatterns)
