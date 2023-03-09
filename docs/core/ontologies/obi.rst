.. toctree::
   :hidden:
   :numbered: 3
   :maxdepth: 1
   :caption: RDFBones Documentation

   core/ontologies/obi_investigations
   core/ontologies/obi_identifiers

The Ontology for Biomedical Investigations
==========================================

The intention of the OBI is to standardise features that the various scientific communities active in the area of biomedicine have in common, since these communities tend to develop idiosyncratic standards when operating individually. These individual standards are then not compatible, despite similarities in methodology that would otherwise have allowed for a straightforward cross-disciplinary analysis. To ensure interoperability between different database systems, the methodology must be described in unambiguous terms across all participating disciplines [Bandrowski2016]_.

The OBI is capable of representing all phases of the experimental process. This includes all entities involved in preparation, execution, and interpretation of a process, such as specimens and instruments used, data collected, and analyses performed, and beyond that also the representation roles and functions in investigations [Brinkman2010]_.

The OBO Foundry , of which OBI is a member since 2013, is a diverse and multinational group of life scientists. The group arose from the OBO project initiated in 2001, which was the initial attempt at standardizing data collection in certain life sciences. OBI itself has also evolved out of previous similar ontologies produced by scientists of the OBO project [Smith2007]_. The group of scientists collaborating on OBI stemmed from 19 different biomedical communities from various nations when OBI was first added to the OBO Foundry, and `the current group`_ continues with regular meetings to discuss progress on the ontology. Though these meetings are primarily for those deeply involved with the project, the community and forum discussions are openly accessible, and anyone wishing to join the initiative is encouraged to do so.

The OBO Foundry requires all member-ontologies to define a term only once among them, a practice called orthogonality, though this ideal has proven difficult to implement across all OBO Foundry ontologies [Ghazvinian2011]_. As a member of the OBO Foundry, OBI also uses a common set of relations from the Relations Ontology, and uses the Basic Formal Ontology as its upper-level framework. This aids interoperability with other ontologies and supports automated reasoning.

The subset implemented in RDFBones represents a slimmed version of the OBI, retaining the general outline of the OBO framework and central OBI elements. Though there is a focus on genetics and other molecular methods in the OBI, the general sequence of operations in investigations provides a suitable framework for osteological work. This provides the backbone onto which all other classes and properties in RDFBones are modeled.

.. figure:: ../gfx/RDFBones-OBI_Subset-CentralClasses.svg
   :alt: Central classes of the OBI subset and general outline of semantic logics.
   :width: 100.0%

The logical backbone of the OBI is provided by the BFO. All concepts are subclasses of class ‘entity’. A general distinction is made between ‘continuants’, entities that are relatively permanent, and ‘occurrents’ with a limited duration. The occurrents relevant for RDFBones are all ‘processes’ and most of them are ‘planned processes’, meaning their execution is previously devised. The central subclass of class ‘planned process’ in the OBI is, of course, the class ‘investigation’.

Continuants, according to OBO, are either dependent or independent. ‘Independent continuants’ are natural entities existing out of themselves. They can be material or immaterial. Subclasses of ‘material entity’ that are relevant to RDFBones include ‘object’, ‘organism’, ‘material anatomical entity’ and ‘organization’. A subclass of ‘organism’ is ‘homo sapiens’ representing all human bodies and beings. The OBI does not make a distinction between ‘homo sapiens’ and the concept of a person. Therefore, individuals of the class ‘homo sapiens’ occur both as specimen and as executing researchers, principal investigators, etc. There are several subclasses of class ‘homo sapiens’ describing various groups of agents in scientific investigations.

Dependent continuants are further classified into two groups, depending whether they depend on a specific entity or not. ‘Specifically dependent continuants’ can be ‘qualities’ of certain objects like material, colour etc. Another type of ‘specifically dependent continuants’ is ‘realizable entities’. These can describe 'functions' of objects, e. g. if a ruler is used as a measuring device or as a straight guide, or 'roles' that individuals and objects can fulfill in the course of an investigation, e. g. as experimental subject or as analyst. 'Generically dependent objects' are mostly individuals of the subclasses of class 'information content entity'. This comprises all kinds of information about other entities. Especially relevant for RDFBones are the classes 'data item' and 'data set', the latter being a collection of instances of the former. Also, the concept of 'centrally registered identifiers' is used in various contexts, e. g. to describe individual skeletons in a series, pseudonyms in a blinded study or archaeological features from which skeletal material derives.


:doc:`OBI modelling of Investigations </core/ontologies/obi_investigations>`

:doc:`This subpage </core/ontologies/obi_investigations>` explains the concept of study design documentation in the OBI.


:doc:`OBI Modelling of Unique Identifiers </core/ontologies/obi_identifiers>`

:doc:`This subpage </core/ontolgoies/obi_identifiers>` explains how the OBI handles unique identifiers.

Citations

.. _the current group: http://obi-ontology.org/

.. [Bandrowski2016] Bandrowski, Anita, Brinkman, Ryan, Brochhausen, Mathias, Brush, Matthew H, Bug, Bill, Chibucos, Marcus C, Clancy, Kevin, Courto…, "The Ontology for Biomedical Investigations", PLoS ONE 11, 4 (2016), pp. e0154556.

.. [Brinkman2010] Brinkman, Ryan R, Courtot, MÃÂ©lanie, Derom, Dirk, Fostel, Jennifer M, He, Yongqun, Lord, Phillip, Malone, James, Parkinson, H…, "Modeling biomedical experimental processes with OBI", Journal of Biomedical Semantics 1, Suppl 1 (2010), pp. S7--S7.

.. [Ghazvinian2011] Amir Ghazvinian, Natalya F Noy, Mark A Musen, "How orthogonal are the OBO Foundryontologies?", Journal of Biomedical Semantics (2011).

.. [Smith2007] Smith, Barry, Ashburner, Michael, Rosse, Cornelius, Bard, Jonathan, Bug, William, Ceusters, Werner, Goldberg, Louis J., Eilbeck…, "The OBO Foundry: Coordinated Evolution of Ontologies to Support Biomedical Data Integration", Nature Biotechnology 25, 11 (2007), pp. 1251--1255.
