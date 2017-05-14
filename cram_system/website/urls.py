from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^plan/$', views.plan_view),
    url(r'^plan_create/$', views.plan_create_view),
    url(r'^plan_search/$', views.plan_search_view),
    url(r'^plan_finish/$', views.plan_finish_view),
    url(r'^quiz/$', views.quiz_view),
    url(r'^signing/$', views.signing_view),
    url(r'^signing_absent/$', views.signing_absent_view),
    url(r'^signing_actual/$', views.signing_actual_view),
    url(r'^signing_leave/$', views.signing_leave_view),
    url(r'^create_quiz/$', views.create_quiz_view),
    url(r'^quiz_create_expect/$', views.quiz_create_expect_view),
    url(r'^quiz_create_done/$', views.quiz_create_done_view),
    url(r'^quiz_create_not_done/$', views.quiz_create_not_done_view),
    url(r'^quiz_expect/$', views.quiz_expect_view),
    url(r'^quiz_done/$', views.quiz_done_view),
    url(r'^quiz_not_done/$', views.quiz_not_done_view),
    url(r'^finish_quiz/$', views.finish_quiz_view),
    url(r'^plan_expect/$', views.plan_expect_view),
    url(r'^plan_done/$', views.plan_done_view),
    url(r'^plan_not_done/$', views.plan_not_done_view),
    url(r'^left/$', views.left_view),
    url(r'^homework/$', views.homework_view),
]

urlpatterns = format_suffix_patterns(urlpatterns)
