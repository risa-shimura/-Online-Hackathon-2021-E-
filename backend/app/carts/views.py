from django.shortcuts import render, get_object_or_404 
from .models import Cart
from products.models import Product


"""
受け取るもの: productのpk, user-> reqeust.user
この2個の情報からcartに保存してあげる
"""

def cart(request, shop_pk, product_pk):
    if request.method=="POST":
        user = request.user 
        # リクエストに含まれるpkからproductのobjectを取得
        # 取得したものをcartとして保存する
        product = get_object_or_404(Product, pk=product_pk)
        cart_content = Cart(user = user, purchase_product = product)
        cart_content.save()
        return render(request,"carts/purchase.html", {'cart_content':cart_content})
