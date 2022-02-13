from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()


class Shop(models.Model):
    user = models.OneToOneField(
        User,
        verbose_name='ユーザー',
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=50)
    content = models.TextField()
    image_url = models.URLField(max_length=200)
