.. RDFBones-O documentation master file, created by
   sphinx-quickstart on Wed Apr 28 16:14:55 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

The RDFBones Core Ontology
==========================

`RDFBones`_ [Engel2019]_ is an ontology for representing osteological research and resulting data in biological anthropology. It consists of a **core ontology** providing general concepts related to research in general and osteological research in particular. The core ontology is meant to be extended by additional ontologies that concretise its concepts. Researchers can write such **ontology extensions** to implement the specific methods and workflows required for their scientific work. This is the documentation of the core ontology.

.. _RDFBones: https://github.com/RDFBones/RDFBones-O

.. toctree::
   :maxdepth: 2
   :hidden:

   manual/manual_mainpage
   ontologies/ontologies

   ontologies/obi/obi_general
   ontologies/cidoc/cidoc_crm
   ontologies/fma
   ontologies/submodules/submodules

   ontologies/submodules/collection
   ontologies/submodules/anatomical_model

   ontologies/submodules/regions_of_interest

   ontologies/obi/obi_investigations
   ontologies/obi/obi_identifiers

   ontologies/cidoc/cidoc_rdfbones
   ontologies/cidoc/cidoc_extensions


:doc:`RDFBones User's Manual </manual/manual_mainpage>`
--------------------------------------------------------

For a guide on how to use RDFBones, visit the :doc:`user's manual </manual/manual_mainpage>`.


:doc:`Ontologies on which RDFBones is based </ontologies/ontologies>`
----------------------------------------------------------------------

RDFBones is mostly composed of elements borrowed from other ontologies. :doc:`This introduction </ontologies/ontologies>` lists the ontologies and submodules found in RDFBones and describes the functions they serve.


Citations
----------

.. [Engel2019] Engel, Felix and Schlager, Stefan, "RDFBones -- making research explicit: an extensible digital standard for research data", Anthropologischer Anzeiger 76, 3 (2019), pp. 245--257.
