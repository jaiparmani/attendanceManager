from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('subject-detail/user_id=<str:user>/subject_id=<int:id>', views.subjectDetail, name="subject-detail"),
	path('subject-list/username=<str:username>/',
	     views.subjectList, name="subject-list"),

	path('user-Detail/<str:pk>/', views.userDetail, name="subject-list"),

    # path('subject-detail/<str:pk>/', views.subjectDetail, name="subject-detail"),
	path('subject-create/', views.subjectCreate, name="subject-create"),
	path('user-create/', views.userCreate, name="user-create"),

	path('subject-update/user_id=<str:user>/subject_id=<int:id>',
	     views.subjectUpdate, name="subject-update"),
	# path('subject-delete/<str:pk>/', views.subjectDelete, name="subject-delete"),
]
