from django.db import models

class ProductRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    date = models.DateField()
    rank = models.CharField(max_length=20)
    cutoff = models.CharField(max_length=20)
    products = models.TextField()

    def __str__(self):
        return self.name