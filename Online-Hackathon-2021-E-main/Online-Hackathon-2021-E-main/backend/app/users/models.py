from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    image_url = models.URLField(max_length=200)
