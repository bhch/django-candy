from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.contrib.auth import authenticate, login
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .admin import site
from .serializers import CommonModelSerializer, CommonModelListSerializer
from .utils import LimitOffsetPagination
from django.conf import settings
from django.urls import reverse


def index(request):
    site_name = site.get_site_name()
    base_admin_url = site.get_base_admin_url()
    base_api_url = base_admin_url + 'api/v1/'
    return render(request, 'django_candy/index.html', {
        'site_name': site_name, 'base_admin_url': base_admin_url,
        'base_api_url': base_api_url
        })


class InitView(APIView):
    def get(self, request, format=None):
        data = {
            'user': {
                'authenticated': False
            }
        }

        if request.user.is_authenticated:
            data['user'] = {
                'authenticated': True,
                'is_active': request.user.is_active,
                'is_staff': request.user.is_staff,
                'is_superuser': request.user.is_superuser,
                'username': request.user.get_username(),
                'name': request.user.get_short_name() or request.user.get_username(),
            }


            data['apps'] = site.get_app_structure(request.user)
            data['side_menu'] = site.get_side_menu()
            data['top_menu'] = site.get_top_menu()
            data['site_name'] = site.get_site_name()
        return Response(data)


"""
def init_view(request):
    data = {
        'user': {
            'authenticated': False
        }
    }

    if request.user.is_authenticated:
        data['user'] = {
            'authenticated': True,
            'is_active': request.user.is_active,
            'is_staff': request.user.is_staff,
            'is_superuser': request.user.is_superuser,
            'username': request.user.get_username(),
            'name': request.user.get_short_name() or request.user.get_username(),
        }


        data['apps'] = site.get_app_structure(request.user)
        data['side_menu'] = site.get_side_menu()
        data['top_menu'] = site.get_top_menu()
        data['site_name'] = site.get_site_name()

    return JsonResponse(data)
"""


class CommonViewSet(viewsets.ModelViewSet):
    #permission_classes = (DefaultModelPermissions,)
    #filter_backends = (filters.DjangoFilterBackend,)
    #filterset_class = ChallanFilterSet
    pagination_class = LimitOffsetPagination

    def set_model(self):
        if hasattr(self, 'model'):
            return

        app_label = self.kwargs['app_label']
        model_name = self.kwargs['model_name']

        model, model_admin = site.get_registered(app_label, model_name)

        if not model:
            raise Http404

        self.model = model
        self.model_admin = model_admin

    def get_queryset(self):
        self.set_model()
        return self.model.objects.all()

    def get_serializer_context(self):
        return {
            'request': self.request, 'action': self.action,
            'model_admin': self.model_admin
        }

    def get_serializer_class(self):
        self.set_model()
        if self.action: # == 'list':
            CommonModelListSerializer.Meta.model = self.model
            CommonModelListSerializer.Meta.model_admin = self.model_admin
            CommonModelSerializer.Meta.fields = self.model_admin.get_list_display()
            return CommonModelListSerializer


        CommonModelSerializer.Meta.model = self.model
        return CommonModelSerializer


def api_list_view(request, name):
    if name == 'init':
        return init_view(request)

    return JsonResponse({'version': '1.0', 'logged_in': False})


def api_view(request, name, pk):
    return JsonResponse({'version': '1.0', 'logged_in': False})



class LoginView(APIView):
    def post(self, request, format=None):

        data = {
            'user': {'authenticated': False}
        }

        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Incorrect username or password'})

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'username': user.username})

        if request.user.is_authenticated:
            data['user'] = {
                'authenticated': True,
                'is_active': request.user.is_active,
                'is_staff': request.user.is_staff,
                'is_superuser': request.user.is_superuser,
                'username': request.user.username,
                'name': request.user.get_short_name() or request.user.get_username(),
            }

        return Response(data)
