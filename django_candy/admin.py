import copy
from django.contrib import admin
from django.apps import apps
from django.conf import settings
from django.utils.text import capfirst
from django.contrib.admin.utils import label_for_field
from django.urls import reverse


class ModelAdmin:
    list_display = []

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

    def get_init_data(self, user):
        data = {
            'name': self.model.__name__.lower(),
            'endpoint': '%s/%s' % (self.model._meta.app_label, self.model.__name__.lower()), # :TODO: reverse url
            'app_label': self.model._meta.app_label,
            'verbose_name': self.model._meta.verbose_name,
            'verbose_name_plural': self.model._meta.verbose_name_plural,
            'list_display': self.get_list_display(),
            'list_display_labels': self.get_list_display_labels(),
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

    def get_list_display(self):
        if not len(self.list_display):
            return ['__str__']
        return self.list_display

    def get_list_display_labels(self):
        labels = []

        for item in self.get_list_display():
            labels.append(capfirst(label_for_field(item, self.model, self)))

        return labels



class AdminSite:
    def __init__(self):
        self._registry = {} # {'app_label.model_name': (model_class, model_admin)}
        #self._side_menu = []
        #self._top_menu = []

    def register(self, model, admin_class=None):
        key = '.'.join([model._meta.app_label, model.__name__.lower()])

        if key in self._registry:
            return

        if not admin_class:
            admin_class = ModelAdmin

        model_admin = admin_class(model)
        self._registry[key] = (model, model_admin)

    def get_registry(self):
        return copy.deepcopy(self._registry)

    def get_registered(self, app_label, model_name):
        key = '.'.join([app_label, model_name])
        return self._registry.get(key, (None, None))

    def get_side_menu(self):
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



    def get_top_menu(self):
        return []

    def get_app_structure(self, user):
        data = {}

        registry = self._registry

        for key in registry:
            model, model_admin = registry[key]

            init_data = model_admin.get_init_data(user)

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
