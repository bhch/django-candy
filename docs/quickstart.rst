Quickstart
==========

Candy provides an API quite similar to that of Django admin's. 


.. note:: 

    As of version |version|, ``django-candy`` is not a drop-in replacement for 
    Django admin. See :doc:`differences` for more.

Register your models
--------------------

.. code-block:: python

    # admin.py

    from django_candy import admin
    from myapp.models import MyModel

    admin.site.register(MyModel)


If you reload the Candy admin site, you should find your model appear in the 
side menu.


``ModelAdmin`` class
--------------------

Candy also provides a :class:`~django_candy.admin.ModelAdmin` class similar to that of Django admin.

To choose which fields to display in the list page, you can do this:

.. code-block:: python

    # admin.py 

    from django_candy import admin
    from myapp.models import MyModel

    class MyModel(admin.ModelAdmin):
        list_display = ['field_1', 'field_2', 'etc']

    admin.site.register(MyModel, MyModelAdmin)


As of version |version|, only the list page works (and partially so).

Next steps
----------

As mentioned earlier, ``django-candy`` is not a drop-in replacement for Django's 
default admin. It's a good idea to familiarise yourself with the 
:doc:`differences in the API <differences>` before diving deeper.