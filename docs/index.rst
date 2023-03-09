.. RDFBones-O documentation master file, created by
   sphinx-quickstart on Wed Apr 28 16:14:55 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. toctree::

   userguide/userguide_main
   core/core_main
   bestpractice/bestpractice_main
   
RDFBones
========

`RDFBones`_ is an ontology for representing osteological research and resulting data in biological anthropology. It consists of a **core ontology** providing general concepts related to research in general and osteological research in particular. The core ontology is meant to be extended by additional ontologies that concretise its concepts. Researchers can write such **ontology extensions** to implement the specific methods and workflows required for their scientific work.

RDFBones is based on the Resource Description Framework (RDF)

.. _RDFBones: https://github.com/RDFBones/RDFBones-O

:doc:`How to Use RDFBones </userguide/userguide_mainpage>`

RDFBones lets you write a detailed description of your research and the resulting data. At the same time, this record can be queried like a database to extract data for your research projects. RDFBones provides you with all you need to defined standardised data input and output for your investigations.  The :doc:`user guide </userguide/userguide_mainpage>` gets you started with documenting your research.
  
* Who should use RDFBones?
* What tools are needed?
* How to write an RDFBones ontology extension?
   
:doc:`The RDFBones Core Ontology </core/core_mainpage>`

The core ontology is built on top of various well-established high-level ontologies and also contains genuine elements related to osteological research. Knowing the mechanisms it provides is essential for writing your own ontology extensions. The :doc:`core ontology documentation </core/core_mainpage>` covers the following topics:

* Which source ontologies provide the elements that the core ontology is made of?
* How are these core ontologies integrated to form the RDFBones core ontology?
* What basic mechanisms does the core ontology provide that can be used to describe research in ontology extensions?
  
:doc:`Semantic Research Data Modelling with RDFBones: Best Practice </bestpractice/bestpractice_mainpage>`

RDF allows to describe data models in a very flexible way. As a consequence, RDFBones ontology extensions can find most diverse solutions for describing osteological research methods. While this can be counted among the strong points of this approach, it might also result in unnecessary complexity, e.g. when ontology extensions are used as data models for scientific software.

This section contains rules for data modelling that are not explicitly stated in the definition of the RDFBones core ontology but help to keep ontology extensions consistent and easy to implement in information management systems.


How to Cite RDFBones

If you use RDFBones for your research, please cite the resource as follows in resulting publications.
   
.. [Engel2019] Engel, Felix and Schlager, Stefan, "RDFBones -- making research explicit: an extensible digital standard for research data", Anthropologischer Anzeiger 76, 3 (2019), pp. 245--257.
