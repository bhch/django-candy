import copy
from django.contrib import admin
from django.apps import apps
from django.conf import settings
from django.utils.text import capfirst
from django.contrib.admin.utils import label_for_field
from django.urls import reverse


class ModelAdmin:
    list_display = []
    list_filters = []

    autocomplete_fields = ()
    raw_id_fields = ()
    fields = None
    exclude = None
    fieldsets = None
    filter_vertical = ()
    filter_horizontal = ()
    radio_fields = {}
    prepopulated_fields = {}
    formfield_overrides = {}
    readonly_fields = ()
    ordering = None
    sortable_by = None
    view_on_site = True
    show_full_result_count = True
    form_schema = {}
    menu_label = ''

    def __init__(self, model):
        self.model = model
        self.app = model._meta.app_label

    def get_init_data(self, request):
        data = {
            'name': self.model.__name__.lower(),
            'endpoint': '%s/%s' % (self.model._meta.app_label, self.model.__name__.lower()), # :TODO: reverse url
            'app_label': self.model._meta.app_label,
            'verbose_name': self.model._meta.verbose_name,
            'verbose_name_plural': self.model._meta.verbose_name_plural,
            'list_display': self.get_list_display(request),
            'list_display_labels': self.get_list_display_labels(request),
            'list_filters': self.get_list_filters(request),
            'form_schema': self.form_schema,
            'permissions': [],
        }
        return data

    def get_menu_data(self):
        return {
            'name': self.model.__name__,
            'menu_label': self.menu_label or self.model._meta.verbose_name_plural,
            'app_label': self.model._meta.app_label,
        }

    def get_list_display(self, request):
        if not len(self.list_display):
            return ['__str__']
        return self.list_display

    def get_list_display_labels(self, request):
        labels = []

        for item in self.get_list_display(request):
            labels.append(capfirst(label_for_field(item, self.model, self)))

        return labels

    def get_list_filters(self, request):
        return self.list_filters

    def get_filtered_queryset(self, request, queryset, query_params):
        return queryset


class AdminSite:
    def __init__(self):
        self._registry = {} # {'app_label.model_name': (model_class, model_admin)}
        #self._side_menu = []
        #self._top_menu = []

    @classmethod
    def get_registry_key(cls, model):
        """Returns the key used in self._registry dict for the given model"""
        return '.'.join([model._meta.app_label, model.__name__.lower()])

    def register(self, model, admin_class=None):
        key = self.get_registry_key(mdoel)

        if key in self._registry:
            return

        if not admin_class:
            admin_class = ModelAdmin

        model_admin = admin_class(model)
        self._registry[key] = (model, model_admin)

    def unregister(self, model):
        key = self.get_registry_key(model)

        if key not in self._registry:
            return

        del self._registry[key]

    def get_registry(self):
        return copy.deepcopy(self._registry)

    def get_registered(self, app_label, model_name):
        key = '.'.join([app_label, model_name])
        return self._registry.get(key, (None, None))

    def get_side_menu(self, request):
        """
            Menu structure:

                data = [
                    {
                        'app': 'app_label', 
                        'models': [
                            {'name': 'model_name', ...}
                        ]
                    }, 
                    {
                        
                    }
                ]
        """
        data = []

        registry = self._registry

        app_indices = {} # {app_label: index}

        for key in registry:
            model, model_admin = registry[key]

            menu_data = model_admin.get_menu_data()

            app_label = menu_data['app_label']
            if app_label not in app_indices:
                app_config = apps.get_app_config(app_label)
                data.append({'app_label': app_label, 'verbose_name': app_config.verbose_name, 'models': []})
                app_indices[app_label] = len(data) - 1

            app_index = app_indices[app_label]

            data[app_index]['models'].append(menu_data)
        return data



    def get_top_menu(self, request):
        return []

    def get_app_structure(self, request):
        data = {}

        registry = self._registry

        for key in registry:
            model, model_admin = registry[key]

            init_data = model_admin.get_init_data(request)

            app_label = init_data['app_label']

            if app_label not in data:
                app_config = apps.get_app_config(app_label)
                data[app_label] = {
                    'name': app_config.name,
                    'verbose_name': app_config.verbose_name,
                    'models': {}
                }

            data[app_label]['models'][init_data['name']] = init_data
        return data

    def get_site_name(self):
        return getattr(settings, 'CANDY_SITE_NAME', 'Candy')

    def get_base_admin_url(self):
        return reverse('django_candy:index')


site = AdminSite()
