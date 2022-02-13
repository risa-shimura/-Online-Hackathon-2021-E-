from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from shops.models import Shop

# Shop: shopsのmodelの中のclass

class Product(models.Model):
    shop = models.ForeignKey(
        'shops.Shop',
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=200)
    price = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(1000000)])
    content = models.TextField()
    image_url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
