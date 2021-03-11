Differences from Django admin
=============================

Django Candy is not a drop-in replacement for Django's default admin. This 
document lists the differences in the API.


``ModelAdmin`` class
--------------------

Candy provides its own :class:`~django_candy.admin.ModelAdmin` and :class:`AdminSite` 
classes. You can't use Django's ``ModelAdmin`` with Candy.

Import ``admin`` from ``django_candy``:

.. code-block:: python

    from django_candy import admin


List search
-----------

``search_fields`` and ``get_search_results`` don't work in Candy.

Use :meth:`~django_candy.admin.ModelAdmin.get_filtered_queryset` to implement 
searching and filtering. 

See :ref:`Usage docs on list search <usage-list-search>` for details.


List filters
------------

``list_filters`` don't work similar to Django admin's. 

And Candy doesn't provide automatic filtering. You're required to filter the 
results yourself using :meth:`~django_candy.admin.ModelAdmin`. 

See :ref:`Usage docs on list filters <usage-list-filters>` for details.

