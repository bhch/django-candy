from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from rest_framework import viewsets
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


def init_view(request):
    data = {
        'apps': site.get_app_structure(request.user),
        'side_menu': site.get_side_menu(),
        'top_menu': site.get_top_menu(),
        'site_name': site.get_site_name()
    }
    return JsonResponse(data)


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