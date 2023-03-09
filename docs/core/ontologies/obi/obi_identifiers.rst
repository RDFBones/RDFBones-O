OBI Modelling of Unique Identifiers
====================================

.. figure:: ../gfx/OBI-CRIDs.svg
   :alt: Unique identifiers as modelled by the OBI.
   :width: 100.0%

Another concept that RDFBones adopts from the OBI is the modelling of series of unique identifiers. In osteological research, these appear in various contexts, e. g. denoting individual skeletons, stratigraphical units from excavations, shelfmarks in museums and archives or sample identifiers.

The central concept in relation to unique identifiers is the class ‘centrally registered identifier’, abbreviated as CRID. CRIDs are composed of at least two parts, a ‘centrally registered identifier symbol’, i. e. the sequence of letters and numbers written on labels or boxes, and an additional piece of information that relates the CRID to a series of identifiers, a ‘centrally registered identifier registry’ in OBI terms. How this construct is to be implemented is exemplified in the definition of class ‘centrally registered identifier symbol’:

The sentence "The article has Pubmed ID 12345." contains a CRID that has two parts: one part is the CRID symbol, which is '12345'; the other part denotes the CRID registry, which is Pubmed.

The OBI offers two subclasses of class ‘planned process’ for modelling interactions with CRIDs. Class ‘assigning a centrally registered identifier’ describes the creation of new CRIDs while class ‘associating information with a centrally registered identifier in its registry’ refers to adding information that is described by a CRID.

Both CRID and CRID symbol can be related to objects they denote through the property ‘is about’, a concept inherited from class ‘information content entity’. It is preferable to use the symbol for this connection as this is the most specific part of the CRID.
