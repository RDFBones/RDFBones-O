CIDOC CRM in RDFBones
=====================

Inclusion of the CIDOC CRM into RDFBones was motivated by the fact that the ontology emerges from long-standing active development and is implemented in several software projects, including the Museum of London's ResearchSpace [1]_ and Geovistory [2]_. RDFBones' elements leaned from the CIDOC CRM provide a basis for establishing compatibility with such systems.

A central point made by CIDOC CRM's definition of the class ‘collection’ is that they are curated by one or more instances of the class ‘actor’ (cidoc:E39). Actors can be either groups (class cidoc:E74), e. g. scientific societies and institutions, or individual persons (class cidoc:E39). These act on collections and their components via curation activities (class cidoc:E87). This constructs allows to document the history of a collection's curation as a series of of events (curation activities) that can be filtered by the actors and collections involved in them.

Unlike classes in OBO ontologies, that are bound to have not more than one direct superclass, classes in the CIDOC CRM can have several of them. As the :ref:`obi` functions as the conceptual backbone of RDFBones, integration of the CIDOC CRM subset involves placing classes within the basic OBI structure while maintaining as much of the modelling principles intended by the CIDOC CRM.

Both classes ‘man-made object’ and ‘biological object’ are subclasses of ‘physical object’ (class cidoc:E19), according to the CIDOC CRM. The equivalent OBI class is ‘object’ (class bfo:0000030) as the definitions showThere is no single class definition for class bfo:0000030. Instead, one of the several editor notes provided by the Basic Formal Ontology (BFO) is given here.:

.. table:: comparing bfo-‘object’ and cidoc-‘physical object’
   :widths: auto
+----------------------------+-----------------------------------------+
| bfo:0000030, ‘object’      | cidoc:E19, ‘physical object’            |
+============================+=========================================+
| An object is a maximal     | This class comprises items of a         |
| causally unified material  | material nature that are units for      |
| entity.                    | documentation and have physical         |
|                            | boundaries that separate them           |
|                            | completely in an objective way from     |
|                            | other objects. [...]                    |
+----------------------------+-----------------------------------------+

As a consequence, the classes ‘man-made object’ and ‘biological object’ can be modelled as subclasses of class ‘object’ (bfo:0000030). ‘Collection’ (class cidoc:E78) does not meet the definition of ‘object’ but its being a subclass of ‘physical man-made thing’ (class cidoc:E24) makes clear that it is to be understood not as a theoretical concept unifying a certain number of physical objects but as a physical entity itself. The most stringent anchor point in the OBI might be the class ‘material entity’ (bfo:0000040), an equivalent to the CIDOC CRM class ‘physical thing’ (cidoc:E18):

.. table:: comparing bfo-‘material entity’ and cidoc-‘physical thing’
   :widths: auto
+---------------------------------+-------------------------------------+
| bfo:0000040, ‘material entity’  | cidoc:E18, ‘physical thing’         |
+=================================+=====================================+
| An independent continuant that  | This class comprises all persistent |
| is spatially extended whose     | physical items with a relatively    |
| identity is independent of that | stable form, man-made or            |
| of other entities and can be    | natural. [...]                      |
| maintained through time.        |                                     |
+---------------------------------+-------------------------------------+

There is no equivalent to the CIDOC CRM class ‘actor’ (cidoc:E39) in the OBI where investigatior, specimen collectors or contact persons are all modelled as subclasses of ‘homo sapiens’ (class ncbtaxon:9606), an indirect subclass of ‘material entity’ (class bfo:0000040). The top distinction of the CIDOC CRM, on the other hand, is between ‘things’ (class cidoc:E70) and ‘actors’ (class cidoc:E77). However, the class ‘person’ (cidoc:E39) is a subclass of both ‘actor’ and ‘biological object’ (class cidoc:E20). So while ‘actor’ and its subclass ‘group’ (class cidoc:E74) are not necessarily interpreted as material entities, ‘person’ definitely can be seen as a material concept, though this is not obligatory as specified by the class definition:

Legendary figures that may have existed, such as Ulysses and King Arthur, fall into this class if the documentation refers to them as historical figures.

The CIDOC CRM class ‘legal body’ (cidoc:E40), subclass of ‘group’ (cidoc:E74) has the OBI class ‘organization’ (obi:0000245) as an equivalent:

.. table:: comparing bfo-‘material entity’ and cidoc-‘physical thing’
   :widths: auto
+---------------------------------+-------------------------------------+
| obi:0000245, ‘organization’     | cidoc:E40, ‘legal body’             |
+=================================+=====================================+
| An entity that can bear roles,  | This class comprises institutions   |
| has members, and has a set of   | or groups of people that have       |
| organization rules. Members of  | obtained a legal recognition as     |
| organizations are either        | a group and can act collectively    |
| organizations themselves or     | as agents. This means that they can |
| individual people. [...]        | perform actions, own property,      |
|                                 | create or destroy things and can be |
|                                 | held collectively responsible for   |
|                                 | their actions like                  |
|                                 | individual people. [...]            |
+---------------------------------+-------------------------------------+

The OBI models ‘organization’ as a direct subclass of ‘material entity’ (class bfo:0000040).

This review of concepts of agents in the CIDOC CRM as compared to counterparts in the OBI shows that the OBI interprets all actors as physical entities while the CIDOC CRM leaves some room for differentiating between biological organisms and their social and legal representations as persons or groups. Such a distinction would make sense in RDFBones as it would help covering use cases aiming at identifying human remains against a list of known persons (e. g. in traffic accidents or mass graves). This would imply to model persons and groups as specifically dependent continuants inhering in an organism or a group of organisms. There are two strong arguments against such a concept. First, ‘organization’ (class obi:0000245) being a subclass of ‘material entity’ (class bfo:0000040) shows that this would be clearly against the logics of the OBI and, secondly, it would prevent actors from taking on roles. As a consequence, all actors need to be modelled as independent continuants.

The only occurrent in the RDFBones subset of the CIDOC CRM is ‘curation activity’ (class cidoc:E87). Its superclass ‘activity’ (class cidoc:E7) is similar to the OBI class ‘planned process’ (obi:0000011):

.. table:: comparing bfo-‘material entity’ and cidoc-‘physical thing’
   :widths: auto
+---------------------------------+-------------------------------------+
| obi:0000011, ‘planned process’  | cidoc:E7, ‘activity’                |
+=================================+=====================================+
| A processual entity that        | This class comprises actions        |
| realizes a plan which is        | intentionally carried out by        |
| the concretization of           | instances of E39 Actor that result  |
| a plan specification.           | in changes of state in the          |
|                                 | cultural, social, or physical       |
|                                 | systems documented. [...]           |
+---------------------------------+-------------------------------------+

As a consequence, ‘curation activity’ (class cidoc:E87) can be modelled as a subclass of ‘planned process’ (obi:0000011).

The above figure shows how the classes of the RDFBones subset of the CIDOC CRM are integrated with the OBI subset as a consequence of the discussions above.

.. [1] https://www.researchspace.org/; last accessed on 25 August 2020.

.. [2] https://kleiolab.wordpress.com/geovistory/; last accessed on 25 August 2020.
