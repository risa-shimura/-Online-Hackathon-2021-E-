import json
from django.shortcuts import render, get_object_or_404 
from django.views.generic import View
from .models import Shop
from django.contrib.auth import get_user_model
from django.http.response import JsonResponse

User = get_user_model()

class ShopListView(View):
    def get(self, request, *args, **kwargs):
        shop_data = Shop.objects.all()
        user =  get_object_or_404(User, username=request.user)
        return render(request, 'shops/shop_list.html', {'shop_data':shop_data,'user':user})

def shop(request):
    return render(request, 'shops/shop.html',)

def get_user_info(request):
    user = get_object_or_404(User, username=request.user)
    user_info = {
        'id': user.id,
        'username': user.username,
    }
    return JsonResponse(user_info)
