from django.urls import path
from django.urls.conf import include

from . import views

# app_name = 'products'

urlpatterns = [
    path('products/', views.ProductListView.as_view(), name='product_list'), 
    path('products/<int:product_pk>',  include('carts.urls')),
]
