from django.urls import path, include, re_path
from rest_framework import routers

from django_candy import views

app_name = 'django_candy'


router = routers.SimpleRouter()
router.register(r'api/v1/(?P<app_label>[\w]+)/(?P<model_name>[\w]+)', views.CommonViewSet, basename='candy')

urlpatterns = router.urls


urlpatterns += [
    path('api/v1/init/', views.init_view, name='api'),
    path('api/v1/<app_label>/<model_name>/', views.api_view, name='api'),
    re_path('.*', views.index, name='index'),
]