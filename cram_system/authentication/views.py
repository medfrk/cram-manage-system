from django.shortcuts import render

from django.http import HttpResponse
from allauth.socialaccount.models import SocialAccount
# Create your views here.

def testprofilepage(request):
  socialaccount = SocialAccount.objects.filter(user_id=request.user.id, provider='facebook')
  if len(socialaccount) is not 1:
    print("ERROR: socialaccount login but get multiple")
    socialaccount = None
  return render(request, "authentication/testprofilepage.html", {'socialaccount': socialaccount[0].uid, 'provider': socialaccount[0].provider})
