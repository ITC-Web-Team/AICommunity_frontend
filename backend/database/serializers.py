from rest_framework import serializers
from .models import *

class BlogAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
    

class BlogSpecificSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
    
class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'
    

class ProjectAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectSpecificSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'