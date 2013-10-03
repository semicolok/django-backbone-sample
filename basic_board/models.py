from django.db import models

class Board(models.Model):
	title = models.CharField(max_length=50, blank=True)
	content = models.CharField(max_length=250, blank=True)
	writer = models.CharField(max_length=50, blank=True)
	created_date = models.DateField(null=True, blank=True)
