from django.shortcuts import render
from django.views.generic import View
from .models import Product
from shops.models import Shop


class ProductListView(View):
    def get(self, request, *args, **kwargs):
        product_data = Product.objects.filter(shop_id=self.kwargs["shop_pk"])
        shop_data = Shop.objects.get(pk=self.kwargs["shop_pk"])
        return render(request, 'products/product_list.html', {'product_data':product_data, 'shop_data':shop_data})

