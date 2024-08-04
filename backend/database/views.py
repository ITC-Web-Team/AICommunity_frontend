from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import*
import markdown
import django.http

#all blogs
@api_view(['GET'])
def display_all(request):
    blogs=Blog.objects.all()
    data=BlogAllSerializer(blogs, many=True).data
    
    return Response(data=data, status=status.HTTP_200_OK)


#specific blog
@api_view(['GET'])
def display_blog(request, id):
    try:
        blog=Blog.objects.get(id=id)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    blog.content = markdown.markdown(blog.content)
    data=BlogSpecificSerializer(blog).data
    return Response(data=data, status=status.HTTP_200_OK)

#display members
@api_view(['GET'])
def display_members(request):
    members=Member.objects.all()
    data=MemberSerializer(members, many=True).data
    return Response(data=data, status=status.HTTP_200_OK)

#projects
@api_view(['GET'])
def display_projects(request):
    project = Project.objects.all() 
    data = ProjectAllSerializer(project, many=True).data
    
    return Response(data=data, status=status.HTTP_200_OK)

    
    