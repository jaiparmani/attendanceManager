from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SubjectSerializer, UserSerializer

from .models import Subjects, User
# Create your views here.


@api_view(['GET'])
def apiOverview(request):
	api_urls = {
            'List': '/subject-list/',
          		'Detail View': '/subject-detail/<str:pk>/',
          		'Create': '/subject-create/',
          		'Update': '/subject-update/<str:pk>/',
          		'Delete': '/subject-delete/<str:pk>/',
        }

	return Response(api_urls)


# Gives particular subject of that particular user


@api_view(['GET'])
def subjectDetail(request, user, id):
    print("Hello worlds")

    subjects = Subjects.objects.get(user=user, id=id)
    serializer = SubjectSerializer(subjects, many=False)
    return Response(serializer.data)


# Gives list of subjects of that particular user
@api_view(['GET'])
def subjectList(request, username):
    id = User.objects.get(username=username).id

    subjects = Subjects.objects.all().filter(user=id)
    serializer = SubjectSerializer(subjects, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def userDetail(request, pk):
    print("Hello worlds")
    user = User.objects.get(username=pk)
    id = User.objects.get(username=pk).id
    print(id)
    serializer = UserSerializer(user, many=False)
    subjects = Subjects.objects.all().filter(user=id)
    serializer1 = SubjectSerializer(subjects, many=True)
    # finalSerializer = [{"User":serializer.data}, {'Subjects':serializer1.data}]
    return Response(serializer.data)


@api_view(['POST'])
def subjectUpdate(request, user, id):
	subject = Subjects.objects.get(user=user,id=id)
	serializer = SubjectSerializer(instance=subject, data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)
#     {
# "subjectId":2, 
# "user":1,
# "noOfLecturesAttended":0,
# "noOfLecturesNotAttended":10,
# "subjectName":"AdminsSubjectAgain"
# }


@api_view(['POST'])
def subjectCreate(request):
	serializer = SubjectSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['POST'])
def userCreate(request):
	serializer = UserSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


# @api_view(['DELETE'])
# def taskDelete(request, pk):
# 	task = Task.objects.get(id=pk)
# 	task.delete()

# 	return Response('Item succsesfully delete!')
