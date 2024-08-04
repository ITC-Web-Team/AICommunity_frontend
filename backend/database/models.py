from django.db import models
import markdown

class Blog(models.Model):
    title=models.CharField(max_length=100)
    authors=models.CharField(max_length=100)
    markdown=models.TextField()
    html=models.TextField(blank=True)
    date=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def __init__(self, *args, **kwargs):
        super(Blog, self).__init__(*args, **kwargs)
        self.html = markdown.markdown(self.markdown)
    
    def save(self, *args, **kwargs):
        self.html = markdown.markdown(self.markdown)
        super(Blog, self).save(*args, **kwargs)
    

class Member(models.Model):
    name=models.CharField(max_length=100)
    position=models.CharField(max_length=100)
    priority=models.IntegerField('3 is highest, 1 is lowest')
    batch=models.CharField(max_length=100)
    email=models.EmailField(max_length=100, blank=True)
    phone=models.CharField(max_length=100, blank=True)
    linkedin=models.URLField(max_length=100, blank=True)
    github=models.URLField(max_length=100, blank=True)
    pic=models.ImageField(upload_to= './')

    def __str__(self):
        return self.name



class Project(models.Model):
    title = models.CharField(max_length = 100)
    img =models.ImageField(upload_to= './')
    link = models.URLField(max_length=100)
    description = models.TextField(default = None)
    
    
    def __str__(self):
        return self.title


