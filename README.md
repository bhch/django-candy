<p align="center">
    <img src="django_candy/static/django_candy/img/logo-splash.png" width="150" alt="Django Candy icon">
</p>

<p align="center">
    A modern, single-page-app admin for Django.
</p>

## Installation

**/!\ Attention:** This is a pre-alpha project. Most of the things don't work. 
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
```

#### 3. Modify your project's urls.py

```python
# urls.py

urlpatterns = [
    # ...
    path('candy/', include('django_candy.urls')),
]
```

## Documentation

Docs can be found at http://django-candy.rtfd.io


## Frontend

Frontend is written in React. You can find the source at https://github.com/bhch/candy-frontend.


## License

[BSD-3-Clause](LICENSE.txt)