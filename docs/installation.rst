Installation
============

.. attention::
    Django Candy is currently a **pre-alpha project**. Most of the things don't work. 
    However, if you're curious, you can still try it out.  

Install using pip:

.. code-block:: sh

    $ pip install django-candy


Update your project's settings:

.. code-block:: python

    # settings.py
    INSTALLED_APPS = [
        # ...
        'django_candy'
    ]


Update your project's urls:

.. code-block:: python

    # urls.py
    urlpatterns = [
        # ...
        path('candy/', include('django_candy.urls')),
    ]


Run the server and visit ``http://127.0.0.1:8000/candy/`` from your browser to see 
the admin in action. 

For logging in, you need to create a user using Django's ``createsuperuser`` 
command. 

Next, go to :doc:`quickstart` page for instructions about using the admin site.