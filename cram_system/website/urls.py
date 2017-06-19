from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^console/', views.console_view),
    url(r'^logout/', views.Logout),
    url(r'^plan/$', views.plan_view),
    url(r'^plan_create/$', views.plan_create_view),
    url(r'^plan_search/$', views.plan_search_view),
    url(r'^plan_finish/$', views.plan_finish_view),
    url(r'^quiz_list/$', views.quiz_list_view),
    url(r'^signing/$', views.signing_view),
    url(r'^signing_course/$', views.signing_course_view),
    url(r'^create_quiz/$', views.create_quiz_view),
    url(r'^finish_quiz/$', views.finish_quiz_view),
    url(r'^left/$', views.left_view),
    url(r'^homework/$', views.homework_view),
    url(r'^quiz_create/$', views.quiz_create_view),
    url(r'^quiz/$', views.quiz_view),
    url(r'^plan_for_today/$', views.plan_for_today_view),
    url(r'^all_course/$', views.all_course_view),
    url(r'^all_student/$', views.all_student_view),
    url(r'^note_course/$', views.note_course_view),
    url(r'^note_student/$', views.note_student_view),
    url(r'^create_student_note_table/$', views.create_student_note_table_view),
    url(r'^student_dashboard/$', views.student_dashboard_view),
    url(r'^bank_log_for_course/$', views.bank_log_for_course_view),
    url(r'^bank_log_for_meals/$', views.bank_log_for_meals_view),
    url(r'^bank_log_for_study/$', views.bank_log_for_study_view),
    url(r'^student_note_more/$', views.student_note_more_view),
    url(r'^plan_to_print/$', views.plan_to_print_view),
    url(r'^quiz_to_print/$', views.quiz_to_print_view),
    url(r'^note_course_by_date/$', views.note_course_by_date_view),
]

urlpatterns = format_suffix_patterns(urlpatterns)
