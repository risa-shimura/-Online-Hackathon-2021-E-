from django.db import models
from products.models import Product

from django.contrib.auth import get_user_model

User = get_user_model()


class Cart(models.Model):
    user = models.ForeignKey(
        User,
        verbose_name='ユーザー',
        on_delete=models.CASCADE,
    )
    
    purchase_product = models.ForeignKey(
        'products.Product',
        on_delete=models.CASCADE,
    )
