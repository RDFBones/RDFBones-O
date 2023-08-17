# RDFBones User Guide

The RDFBones standard consists of a hierarchy of ontologies which describe specific processes employed in osteology and their output datasets. Datasets produced with RDFBones ontologies can be queried with the query language _SPARQL_. Queries are the main method by which data is produced in the RDFBones software implementation __AnthroGraph__ and they are also the main method for extracting data, be it only select elements of a dataset or the entire dataset itself, from AnthroGraph's database. In order to write SPARQL queries for these datasets, it is necessary to understand how the datasets work. This guide provides a basic introduction to pivotal concepts of _RDF_, the data model on which the RDFBones standard is based, and of which SPARQL is the recommended query language. This guide further provides directions on how the RDFBones documentation can be used to assist in writing a SPARQL query for a given RDFBones dataset.

## Basic concepts of RDF and RDFBones

### Triples

RDF data consists of triples. A triple consists of 3 elements which are read in a set direction and offer some kind of meaning. Such data is referred to as semantic data. The 3 elements of an RDF triple are commonly referred to as _subject_, _predicate_, and _object_. Typically, any subject can also be an object and vice-versa. Whether a data item becomes a subject or object is dependent upon what information is being conveyed by the triple it is part of. In contrast, predicates used in RDFBones generally do not appear as subjects or objects. Subjects, predicates, and objects all have identifiers. These are called IRIs, and they are what is used in a triple to specify what data items are being used in a triple. IRIs can be looked up in the ontology in which they are defined.

### IRIs

An IRI is ultimately just a string of text. They typically look similar to URLs, and they are in fact closely related in concept. Each IRI belongs to a unique concept, such as a class describing e.g. a human femur, while another IRI may refer to an instance of a human femur, such as one found in an excavated burial.

### Classes and instances

Classes generally describe concepts in the abstract, that is, they do not describe a "real-world" instance of something, such as the femur of a specific human skeleton, but instead describe only the concept of a human femur in general. Classes can be instantiated, which means the abstract concept is applied to a concrete occurence. This can be the case of a human femur being found in a burial excavation and then being described as an instance of such in a skeletal inventory, or it can be the process of a skeletal inventory being performed. If we assume we have an ontology that has classes for both the femur and the inventorying process, the excavated femur would be an instance "of the type" 'human femur', and the inventory process would be "of the type" 'skeletal inventory process'. The recorded femur of the skeleton will have a unqiue IRI distinct from the IRI of the class which describes femurs as a concept.

### Ontologies

Ontologies contain information on classes and other concepts relevant for describing data, such as instances of classes and logical axioms. The ontologies come in the form of text files with a specific type of formatting which makes them machine-readable. Every class in an ontology _must_ have an IRI, and a class will usually have further information such as a definition and instructions on how it is to be used in datasets.

#### RDFBones core ontology and extension ontologies

The RDFBones standard is defined through a collection of ontologies, wherein the _RDFBones core ontology_ forms the basis of the standard. The core ontology contains primarily those concepts which are likely to be used in many, if not all, RDFBones extension ontologies. Extension ontologies describe more specific osteological investigations and their output data, e.g. a specific method for estimating the age of an individual. The information found in this document offers further guidelines on how concepts defined in the ontology came to be and how they are intended to be used.
Integral to understanding ontologies and ontology datasets, especially when attempting to navigate the datasets via SPARQL, are the network graphs produced by the authors of the extension.


## RDFBones network graphs

Network graphs describe the information of a semantic data in a visual form, rather than the text-based form RDF data usually employs. RDFBones network graphs are saved in a specific file format, namely _Scalable Vector Graphics_ (SVG). RDFBones' svg files should only be opened with programs that allow for the use of tabs in svg files. This is currently _not_ the case with most web browsers and many pre-installed iamge viewing applications. We recommend using the free, open source browser application [diagrams.net](https://app.diagrams.net/), also known as draw.io, and which can also be [installed locally as an app](https://www.drawio.com/).

### Where to find specific network graphs

All network graphs related to RDFBones can be found in the [Git repository for RDFBones graphics](https://github.com/RDFBones/RDFBonesGraphics/tree/main/NetworkGraphics). General concepts at the core of osteology or concepts re-used throughout multiple RDFBones implementations can be found in the "CoreOntology" folder, which naturally refers to and contains all data defined by the RDFBones core ontology.

Specific methods and investigations are implemented as extension ontologies. Their network graphs are thus found in the "OntologyExtensions" folder. Each extension has its own graph, wherein all the infromation is provided on how the extension models its output data. In the next section of this document, simplified versions of some of these graphs are provided to serve as an introduction on how to navigate these graphs and find the information necessary to e.g. write a SPARQL query for data extraction.

Explantory network graphs can be found in the repository mentioned above for the following extension ontologies:

- phaleron-si: skeletal inventories according to specifications of the Phaleron Bioarchaeological Project
- phaleron-patho: skeletal pathologies according to specifications of the Phaleron Bioarchaeological Project
- phaleron-di: dental inventories according to specifications of the Phaleron Bioarchaeological Project
- phaleron-dpatho: dental pathologies according to specifications of the Phaleron Bioarchaeological Project
- phaleron-sexest: sex estimation according to specifications of the Phaleron Bioarchaeological Project

### Understanding and navigating network graphs

#### Important concepts for understanding RDFBones network graphs

##### Ontology instances
Some network graphs refer to specific types of instances in the form of  semantic data are also referred to as 'named individuals', and not all named individuals need to be so concrete as material instances of specific bones. In the RDFBones standard, certain qualities or attributes may be "of the type" of certain classes. For example, 'Male' can be "of the type" 'human sex category', where 'human sex category' is a class, and 'Male' is an instance. However, the attribute of 'Male' can be "re-used" and assigned to any number of instances of e.g. human skeletons that have been sexed, despite being an instance itself. These ontology-defined instances are referred to as __ontology instances__.

##### Measurement data

Measurement data are classes used when recording data on osteological observations in RDFBones, such as the presence of a region of interest or the status of a pathology. They are thus a highly central element in most RDFBones datasets and their according network graphs. Measurement data are conspicuous in that they repeat the same structure even every extension and implementation they are used: each instance of a measurement datum is connected to a value specification instance. Each of these value specification instances then is connected to an element which provides the information on the observation, such as a category label or a numeric value. Often the measurement datum also is about a certain region of interest.

By combining the type of the measurement datum - denoted via the predicate of 'rdf:type' - and its region of interest - denoted via the predicate of 'is about' (OBO-ID: IAO_0000136) - each measurement datum can be identified in a dataset. Once this concept is understood, the complexity of most network graphs is reduced considerably.

#### Simplified network graphs

This section serves as an introduction to 

![Dental Inventory Start](/docs/gfx/RDFBones_Guide/Dental_Inventory/dentalinv_inventory.jpg)

Testing image 1

![Dental Inventory Start](/docs/gfx/RDFBones_Guide/Dental_Inventory/dentalinv_dentition.jpg "testing")

Testing image 2

## Introduction to writing SPARQL queries

SPARQL queries are written by referencing the data model as it is found in the dataset. In order to know what the data model looks like, it is necessary to either browser the dataset with SPARQL directly, or to look at the corresponding network graph describing the data model. Every RDFBones extension ontology has its own network graph describing the data model of the data produced by extension in question.

### Prefixes

Prefixes are defined at the top of a SPARQL query and allow for the use of abbreviations in the query. SPARQL queries do not require prefixes to function, but they are generally recommended, as they greatly reduce visual clutter and simplify the act of writing a query. The abbreviations used in a prefix are arbitrary and are only valid for the query in which they are written, though it is recommended to keep consistency where possible to avoid unnecessary confusion.