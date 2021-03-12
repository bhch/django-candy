Customising the admin site
========================== 

Changing site name
------------------

Use the setting ``CANDY_SITE_NAME`` to set a name for the admin site.

.. code-block:: python

    CANDY_SITE_NAME = 'My Admin Site'

Changing logos
--------------

Logos are just static images and, so, can be overrided just like you override 
static files and templates in Django. 

First create a folder called ``django_candy`` inside your Project's main ``static``
folder such that your project structure looks like this:

.. code-block::

    project/
        static/
            django_candy/


Now you can put the images in this ``django_candy`` directory by these names:

- ``logo-icon.png`` - Logo icon.
- ``apple-touch-icon.png`` - Image used for bookmarks on apple devices.
- ``logo-nav.png`` - Logo displayed on top navbar.
- ``logo-nav-mobile.png`` - Logo displayed on top navbar on mobile.
- ``logo-splash.png`` - Logo displayed on initial loading and login screen.
- ``error-splash.png`` - Image displayed on error pages.