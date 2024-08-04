from django.db import models
import markdown

choices={"1":"Founder","2":"Manager","3":"Convener"}

class Blog(models.Model):
    title=models.CharField(max_length=100, default=None)
    authors=models.CharField(max_length=100, default=None)
    content=models.TextField()
    date=models.DateField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title
    

class Member(models.Model):
    name=models.CharField(max_length=100, default=None)
    position=models.CharField(max_length=100, choices=choices.items(), default=None)
    email=models.EmailField(max_length=100, default=None)
    phone=models.CharField(max_length=100, default=None)
    linkedin=models.URLField(max_length=100, default=None)
    github=models.URLField(max_length=100, default=None)
    pic=models.ImageField(upload_to= './', default=None)

    def __str__(self):
        return self.name



class Project(models.Model):
    title = models.CharField(max_length = 100, default = None)
    img =models.ImageField(upload_to= './', default=None)
    link = models.URLField(max_length=100, default=None)
    description = models.TextField(default = None)
    
    
    def __str__(self):
        return self.title


