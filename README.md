<p align="center">
    <img src="django_candy/static/django_candy/img/logo-splash.png" width="150" alt="Django Candy icon">
</p>

<p align="center">
    A modern, single-page-app admin for Django.
</p>

## Installation

**/!\ Note:** This is a pre-alpha project. Most of the things don't work. 
However, if you're curious, you can still try it out.

#### 1. Install using pip

```sh
$ pip install django-candy
```

#### 2. Modify your settings

```python
# settings.py

INSTALLED_APPS = [
    # ...
    'django_candy',
]

MIDDLEWARE = [
    # ...
    'django_candy.middleware.CorsMiddleware',
]
```

#### 3. Modify your project's urls.py

```python
# urls.py

urlpatterns = [
    # ...
    path('candy/', include('django_candy.urls')),
]
```

## Usage

After installation, you can visit `http://127.0.0.1:8000/candy/` to see the 
admin interface in action.

#### 1. Register your models

The API is pretty similar to that of Django's default admin:

```python
# admin.py

from django_candy import admin
from myapp.models import MyModel

admin.site.register(MyModel)
```

Reload the admin page and you should see your registered model there.

Currently, the add/edit pages don't work. You can add some objects to your 
model from django shell and you'll see them listed on list page.

#### 2. `ModelAdmin` class

There's also a `ModelAdmin` class for better control over the admin ui:

```python
# admin.py

from django_candy import admin
from myapp.models import MyModel

class MyModelAdmin(admin.ModelAdmin):
    list_display = ['field_1', 'field_2', 'etc']

admin.site.register(MyModel, MyModelAdmin)
```

---

Full docs coming in due time.

## Frontend

Frontend is written in React. You can find the source at https://github.com/bhch/candy-frontend.


## License

[BSD-3-Clause](LICENSE.txt)