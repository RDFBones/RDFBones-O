#! /bin/bash

## Merge OWL files

robot merge --input ../RDFBones-main.owl \
      --input ../RDFBonesExtensions-Subset.owl \
      --input ../RDFBones-ROIs-EntireBoneOrgan.owl \
      --input ../CIDOC-CRM-RDFBonesSubset.owl \
      --input  ../ERO-RDFBonesSubset.owl \
      --input ../FMA-RDFBonesSubset.owl \
      --input ../OBI-RDFBonesSubset.owl \
      --input ../SIO-RDFBonesSubset.owl \
      --input ../vcard-RDFBonesSubset.owl \
      --input ../VIVO-RDFBonesSubset.owl \
      --prefix "cidoc-crm: http://www.cidoc-crm.org/cidoc-crm/" \
      --prefix "fma: http://purl.org/sig/ont/fma/" \
      --prefix "obo: http://purl.obolibrary.org/obo/" \
      --prefix "owl: http://www.w3.org/2002/07/owl#" \
      --prefix "phaleron-patho: http://w3id.org/rdfbones/ext/standards-patho/" \
      --prefix "rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#" \
      --prefix "rdfbones: http://w3id.org/rdfbones/core#" \
      --prefix "rdfs: http://www.w3.org/2000/01/rdf-schema#" \
      --prefix "sio: http://semanticscience.org/resource/" \
      --prefix "terms: http://purl.org/dc/terms/" \
      --prefix "vcard: http://www.w3.org/2006/vcard/ns#" \
      --prefix "vivo: http://vivoweb.org/ontology/core#" \
      --prefix "xml: http://www.w3.org/XML/1998/namespace" \
      --prefix "xsd: http://www.w3.org/2001/XMLSchema#" \
      --output results/rdfbones.owl

## Annotate output
      
robot annotate --input results/rdfbones.owl \
      --remove-annotations \
      --ontology-iri "http://w3id.org/rdfbones/ontology_resources/core/latetst/rdfbones.owl" \
      --version-iri "http://w3id.org/rdfbones/ontology_resources/core/v0-2/rdfbones.owl" \
      --annotation owl:versionInfo "0.2" \
      --language-annotation rdfs:label "RDFBones core ontology" en \
      --language-annotation rdfs:comment "This is the RDFBones core ontology. For full functionality, inclusion of specific ontology extentions is required." en \
      --annotation dc:creator "Felix Engel" \
      --annotation dc:creator "Stefan Schlager" \
      --annotation dc:contributor "Lukas Bender" \
      --language-annotation dc:description "RDFBones is an RDF ontology for describing osteological data emerging from investigations in biological anthropology. It is based on the Ontology for Biomedical Investigations (OBI) and includes elements from the Foundational Model of Anatomy (FMA), the CIDOC Conceptional Reference Model (CIDOC-CRM) and other ontologies." en \
      --language-annotation dc:title "RDFBones core ontology" en \
      --output results/rdfbones.owl

## Quality check of output

robot reason --reasoner ELK \
      --input results/rdfbones.owl \
      -D results/debug.owl
	    
	    
	    
	    

