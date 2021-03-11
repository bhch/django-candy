API reference
=============

.. module:: django_candy.admin
    :synopsis: Django Candy admin site.

This page provides a reference to the API. See the :doc:`usage` page for a 
detailed guide on using the API.

.. class:: ModelAdmin

    Replacement for DJango's ``ModelAdmin``.

    .. attribute:: list_display

        Used for specifying which fields appear in the list page table. It 
        works similar to Django admin's.

        It can accept field names and method names.

    .. attribute:: list_filters

        Used for configuring the filters for the list page. It's **not similar**
        to Django admin. 

        See :ref:`Usage docs <usage-list-filters>` for details.

    .. method:: get_filtered_queryset(request, queryset, query_params)

        This method can be used for :ref:`implementing search <usage-list-search>` 
        and :ref:`filters <usage-list-filters>`.

        :param request: The current request instance.

        :param queryset: The queryset for the list page. 

        :param query_params: The query parameters sent with the request. 