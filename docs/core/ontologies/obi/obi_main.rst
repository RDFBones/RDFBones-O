.. _obi:

Ontology for Biomedical Investigations (OBI)
============================================

The Ontology for Biomedical Investigations (OBI) [Bandrowski2016]_ describes scientific investigations.

.. toctree::

   investigation
   crid

The intention of the OBI is to standardise features that the various scientific communities active in the area of biomedicine have in common. The OBI is capable of representing all phases of the experimental process. This includes all entities involved in preparation, execution, and interpretation of a process, such as specimens and instruments, collected and derived data, analyses and  also the representation of roles and functions in investigations [Brinkman2010]_.

Since 2013, the OBI is member of the `OBO Foundry <https://obofoundry.org/>` [Smith2007]_ which requires all member-ontologies to define a term only once among them, a practice called orthogonality [Ghazvinian2011]_. As a member of the OBO Foundry, the OBI also uses a common set of relations from the `Relation Ontology (RO) <https://oborel.github.io/>`, and uses the `Basic Formal Ontology (BFO) <https://basic-formal-ontology.org/>` as its upper-level framework. This aids interoperability with other ontologies and supports automated reasoning.

The subset implemented in RDFBones represents a slimmed version of the OBI, retaining the general outline of the OBO framework and central OBI elements. It functions as a backbone for RDFBones to which all other subsets attach.

The logical backbone of the OBI is provided by the BFO. All concepts are subclasses of class ‘entity’. A general distinction is made between ‘continuants’, entities that are relatively permanent, and ‘occurrents’ with a limited duration. The occurrents relevant for RDFBones are all ‘processes’ and most of them are ‘planned processes’, meaning their execution is previously devised. The central subclass of class ‘planned process’ in the OBI is, of course, the class ‘investigation’.

Continuants, according to OBO, are either dependent or independent. ‘Independent continuants’ are natural entities existing out of themselves. They can be material or immaterial. Subclasses of ‘material entity’ that are relevant to RDFBones include ‘object’, ‘organism’, ‘material anatomical entity’ and ‘organization’. A subclass of ‘organism’ is ‘homo sapiens’ representing all human bodies and beings. The OBI does not make a distinction between ‘homo sapiens’ and the concept of a person. Therefore, individuals of the class ‘homo sapiens’ occur both as specimen and as executing researchers, principal investigators, etc. There are several subclasses of class ‘homo sapiens’ describing various groups of agents in scientific investigations.

Dependent continuants are further classified into two groups, depending whether they depend on a specific entity or not. ‘Specifically dependent continuants’ can be ‘qualities’ of certain objects like material, colour etc. Another type of ‘specifically dependent continuants’ is ‘realizable entities’. These can describe 'functions' of objects, e. g. if a ruler is used as a measuring device or as a straight guide, or 'roles' that individuals and objects can fulfill in the course of an investigation, e. g. as experimental subject or as analyst. 'Generically dependent objects' are mostly individuals of the subclasses of class 'information content entity'. This comprises all kinds of information about other entities. Especially relevant for RDFBones are the classes 'data item' and 'data set', the latter being a collection of instances of the former. Also, the concept of 'centrally registered identifiers' is used in various contexts, e. g. to describe individual skeletons in a series, pseudonyms in a blinded study or archaeological features from which skeletal material derives.

**References**

.. [Bandrowski2016] Bandrowski, Anita, Brinkman, Ryan, Brochhausen, Mathias, Brush, Matthew H, Bug, Bill, Chibucos, Marcus C, Clancy, Kevin, Courto…, "The Ontology for Biomedical Investigations", PLoS ONE 11, 4 (2016), pp. e0154556.

.. [Brinkman2010] Brinkman, Ryan R, Courtot, Mélanie, Derom, Dirk, Fostel, Jennifer M, He, Yongqun, Lord, Phillip, Malone, James, Parkinson, H…, "Modeling biomedical experimental processes with OBI", Journal of Biomedical Semantics 1, Suppl 1 (2010), pp. S7--S7.

.. [Ghazvinian2011] Amir Ghazvinian, Natalya F Noy, Mark A Musen, "How orthogonal are the OBO Foundryontologies?", Journal of Biomedical Semantics (2011).

.. [Smith2007] Smith, Barry, Ashburner, Michael, Rosse, Cornelius, Bard, Jonathan, Bug, William, Ceusters, Werner, Goldberg, Louis J., Eilbeck…, "The OBO Foundry: Coordinated Evolution of Ontologies to Support Biomedical Data Integration", Nature Biotechnology 25, 11 (2007), pp. 1251--1255.
