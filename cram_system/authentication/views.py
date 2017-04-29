from django.shortcuts import render

from django.http import HttpResponse
from allauth.socialaccount.models import SocialAccount
from django.contrib.auth.models import User
# Create your views here.

def testprofilepage(request):
  socialaccount = SocialAccount.objects.filter(user_id=request.user.id, provider='facebook')
  if len(socialaccount) is 1:
    return render(request, "authentication/testprofilepage.html", {'socialaccount': socialaccount[0].uid, 'provider': socialaccount[0].provider})
  else:
    account = User.objects.get_by_natural_key(request.user.username)
    return render(request, "authentication/testprofilepage.html", {'socialaccount': account, 'provider': 'django'})

