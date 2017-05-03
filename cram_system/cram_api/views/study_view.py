from rest_framework import generics
from rest_framework.response import Response
from cram_api.services.study_for_this_day import *


class StudyManageList(generics.RetrieveAPIView):
    """
    &#*%(*&#%)$&@#%(@#)%&
    """
    def get(self, request, date, format=None):
        content = collect_study_signing_data(date)
        return Response(content)

