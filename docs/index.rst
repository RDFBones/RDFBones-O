.. RDFBones-O documentation master file, created by
   sphinx-quickstart on Wed Apr 28 16:14:55 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Documentation of RDFBones and AnthroGraph
==========================================

`RDFBones`_ is the core ontology of AnthroGraph, a software application supporting osteological research in biological anthropology.

**Click on a headline below or a section title in the navigation sidebar to find the respective information.**

.. _RDFBones: https://github.com/RDFBones/RDFBones-O

.. toctree::
   :maxdepth: 2
   :caption: Sections
   :numbered:



Introduction RDFBones
======================

RDFBones is a digital standard for research data from osteological analyses in Biological Anthropology [Engel2019]_. It is designed to deal with the high diversity of contents and methods in this field and to pool information from disparate existing databases.

**A basic guide to using RDFBones is in development. You will find the link here.**


:doc:`Ontologies on which RDFBones is based </submodules/ontologies>`
============================================================

RDFBones is mostly composed of elements borrowed from other ontologies. In order to maintain compatibility with these, RDFBones adheres to their logics as much as possible. This introduction refers to RDFBones versions 0.2 and later.


:doc:`The Ontology of biomedical Investigations </ontologies/obi_general>`
----------------------------------------------------------------------------

The Ontology for Biomedical Investigations (OBI) models biological research. The OBI offers standards for the representation of samples, assays, and data analysis methods used in biomedical investigations.

The :doc:` OBI subpage </ontologies/obi_general>` covers the aspects that are particularly relevant for RDFBones, those being the modelling of investigations and the modelling of unique identifiers.


:doc:`Submodules of RDFBones </submodules/submodules>`
-----------------------------------------------------

The subpage on :doc:`RDFBones' submodules </submodules/ontologies>` explains the Collection Management Model and

Citations
=========

.. [Engel2019] Engel, Felix and Schlager, Stefan, "RDFBones -- making research explicit: an extensible digital standard for research data", Anthropologischer Anzeiger 76, 3 (2019), pp. 245--257.
