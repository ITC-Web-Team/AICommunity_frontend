from rest_framework import serializers
from .models import*

class BlogAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ["id","title","authors","date"]

    def create(self, validated_data):
        return Blog.objects.create(**validated_data)
        
    def update(self, instance, validated_data):
        instance.title=validated_data.get('title', instance.title)
        instance.authors=validated_data.get('authors', instance.authors)
        instance.content=validated_data.get('content', instance.content)
        instance.pic=validated_data.get('pic', instance.pic)
        instance.save()
        return instance
    

class BlogSpecificSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

    def create(self, validated_data):
        return Blog.objects.create(**validated_data)
        
    def update(self, instance, validated_data):
        instance.title=validated_data.get('title', instance.title)
        instance.authors=validated_data.get('authors', instance.authors)
        instance.content=validated_data.get('content', instance.content)
        instance.pic=validated_data.get('pic', instance.pic)
        instance.save()
        return instance
    
class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

    def create(self, validated_data):
        return Member.objects.create(**validated_data)
        
    def update(self, instance, validated_data):
        instance.name=validated_data.get('name', instance.name)
        instance.position=validated_data.get('position', instance.position)
        instance.email=validated_data.get('email', instance.email)
        instance.phone=validated_data.get('phone', instance.phone)
        instance.linkedin=validated_data.get('linkedin', instance.linkedin)
        instance.github=validated_data.get('github', instance.github)
        instance.pic=validated_data.get('pic', instance.pic)
        instance.save()
        return instance
    

class ProjectAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

    def create(self, validated_data):
        return Blog.objects.create(**validated_data)
        
    def update(self, instance, validated_data):
        instance.title=validated_data.get('title', instance.title)
        instance.authors=validated_data.get('authors', instance.authors)
        instance.content=validated_data.get('content', instance.content)
        instance.pic=validated_data.get('pic', instance.pic)
        instance.save()
        return instance
