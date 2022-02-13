from django.urls import path
from django.urls.conf import include

from . import views

app_name = 'shops'


urlpatterns = [
    path('', views.ShopListView.as_view(), name='shop_list'), # shop一覧
    path('<int:shop_pk>/', include('products.urls')),
    path('test/', views.shop, name='shop'),
    path('userinfo/', views.get_user_info, name='get_user_info'),
]
