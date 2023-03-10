.. _collection_management_submodel:

Collection Management Model
===========================

In biological anthropology, specimens are often not collected specifically for certain investigations as it is the case in most areas of biological research. Instead, human remains from (pre-)historic or forensic sites and clinical backgrounds are commonly archived and provided for several investigations. Bodies of material that are kept in one place by the same institution are referred to as 'collections' in RDFBones. Collections might represent material from a common source, including historical collections that are curated as a closed entity. Therefore, an institution may care for several collections. Examples for collections include skeletal material from archaeological excavations in a state that are collected in a state archive, an anatomical collection sustained by a university institute or a private collection left behind by a 19th-century scholar. Collections might include objects other than human remains, e. g. related archaeological finds or representations like casts or pieces of documentation. Note that 'collection', in this context, always refers to a body of curated objects and never to the institution or organisation by which it is kept.

The management of collections of human remains affects anthropological research. For example, it is important to know where specific remains are kept to obtain access for evaluation of previous research or additional investigations. Also, material is lost to research in cases where curators decide to sacrifice human remains for invasive analyses. The documentation of curation activities with a bearing on anthropological research are, therefore, within the scope of RDFBones.


Structure of the Collection Management Model
--------------------------------------------

RDFBones uses the CIDOC CRM to model mechanisms of collection management.

Collections are represented by the class ‘collection’ (cidoc:E78) and consist of (cidoc:P46, 'is composed of') instances of class 'material entity' (BFO:0000040) or its subclasses, especially the following:

* 'material anatomical entity' (uberon:0000002) covering human remains

* 'biological object' (cidoc:E20) covering other organic specimen relating to nature or natural history

* 'man-made object' (cidoc:E22) covering artefacts

The latter two are subclasses of 'object' (bfo:0000030).

Class ‘collection’ (cidoc:E78) is a subclass of class ‘physical thing’ (cidoc:E18) in the CIDOC CRM while the :ref:`obi` provides the example of class 'collection of specimens’ (obi:0002076) which is a subclass of class 'material entity' (bfo:0000040). So both the CIDOC CRM and the OBI interpret collections of physical entities as physical entities themselves which are composed of the objects they contain and not as immaterial entities denoting a series of physical entities. This understanding is also adopted by RDFBones.
