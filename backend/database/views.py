from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
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
        data = BlogSpecificSerializer(blog).data
        return Response(data=data, status=status.HTTP_200_OK)
    
    except Blog.DoesNotExist:
        return Response(data={'error': 'Blog not found'}, status=status.HTTP_404_NOT_FOUND)


#display members
@api_view(['GET'])
def display_members(request):
    members = Member.objects.all()

    # Group members by batch
    batch_groups = {}
    for member in members:
        if member.batch not in batch_groups:
            batch_groups[member.batch] = []
        batch_groups[member.batch].append({
            'name': member.name,
            'position': member.position,
            'priority': member.priority,
            'email': member.email,
            'phone': member.phone,
            'linkedin': member.linkedin,
            'github': member.github,
            'pic': member.pic.url if member.pic else None,
        })

    return JsonResponse(batch_groups, safe=False)
    

#projects
@api_view(['GET'])
def display_projects(request):
    project = Project.objects.all() 
    data = ProjectAllSerializer(project, many=True).data
    
    return Response(data=data, status=status.HTTP_200_OK)

#singleproject project report
@api_view(['GET'])
def display_project(request, id):
    try:
        project=Project.objects.get(id=id)
        data = ProjectSpecificSerializer(project).data
        return Response(data=data, status=status.HTTP_200_OK)
    
    except project.DoesNotExist:
        return Response(data={'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)   
    