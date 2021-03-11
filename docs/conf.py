# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys
sys.path.insert(0, os.path.abspath('..'))

from django_candy import __version__


# -- Project information -----------------------------------------------------

project = 'Django Candy'
copyright = '2021 Bharat Chauhan'
author = 'Bharat Chauhan'

version = __version__

extensions = [
    'sphinx.ext.autosectionlabel',
]

add_module_names = False

templates_path = ['_templates']

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
html_theme_options = {
    'logo_only': True,
}
html_logo = '_static/logo.png'
html_favicon = '_static/favicon.ico'
html_css_files = [
    #"https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap",
    'candy.css',
]
html_show_sphinx = False