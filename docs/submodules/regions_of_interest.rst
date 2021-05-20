Anatomical Regions of Interest
================================

Different osteological methods require different parts of bones or specific features on them to be available for investigation. Also, skeletal inventories might record representation and preservation for arbitrary sections of skeletal elements. These sections are fiat parts demarcated by fiat boundaries, i. e. they do not necessarily follow the anatomical architecture of skeletal elements but are drawn deliberately by researchers to satisfy specific methodological requirements. In RDFBones, these are referred to as ‘regions of interest’ (ROIs).

.. figure:: ../gfx/RDFBones-AnatomicalROIs-OntologyIntegration.svg
   :alt: Integration of anatomical regions of interest, both in the FMA (classes represented on the right) and in the RDFBones core ontology (classes represented on the left). Classes outside the RDFBones core ontology are greyed out.
   :width: 100.0%

ROIs are modelled as immaterial entities. In terms of the FMA, they are subclasses of class ‘immaterial anatomical entity’ (fma:67112). In the RDFBones core ontology, however, the class ‘Anatomical region of interest’ (rdfbones:AnatomicalRegionOfInterest) is a subclass of the class ‘site’ (bfo:0000029) which is taken over from the OBI. The examples of usage for ‘site’ include ‘your left nostril (a fiat part – the opening – of your left nasal cavity)’. As this is unarguably an anatomical region of interest according to the definition given above, the class ‘site’ was chosen as an integration point within the RDFBones core ontology.

.. figure:: ../gfx/RDFBones-AnatomicalRegionOfInterest.svg
   :alt: Types of anatomical regions of interest.
   :width: 100.0%

An ROI can describe a part of a skeletal element or a region covering several elements, both totally and in part ([fig:AnatomicalROIs-Types]). To facilitate exact definitions of ROIs, all of them are based on segments of skeletal elements (class rdfbones:SegmentOfSkeletalElement). Each of these segments is a regional part (fma:regional_part_of) of exactly one anatomical element.[1]_ RDFBones provides specialised classes for segments of bone organs (rdfbones:SegmentOfBoneOrgan), teeth (rdfbones:SegmentOfTooth) and anatomical cavities (rdfbones:SegmentOfAnatomicalCavity). For each segment of a skeletal element, it is possible to specify which portion of the skeletal element it is about is represented by the segment. This information might be necessary if observations on a ROI are to be converted to the level of bone organs. The data properties used here are the generic ‘skeletal element portion’ (rdfbones:skeletalElementPortion) and its subclasses ‘bone portion’ (rdfbones:bonePortion) and ‘tooth portion’ (rdfbones:toothPortion).

ROIs spanning several skeletal elements are defined as combinations of segments of skeletal elements (class rdfbones:CombinationOfSkeletalSegments). The participating instances of class ‘segment of skeletal element’ are defined as the regional parts of the instance of class ‘combination of skeletal elements’ using the property ‘regional part’.

To ensure uniform data structures, research data items always refer to ROIs instead addressing skeletal elements directly. This is the case even if data are about natural skeletal elements in their entirety. The RDFBones core ontology provides ROI classes about entire bone organs (subclasses of rdfbones:EntireBoneOrgan) and teeth (subclasses of rdfbones:EntireTooth). For these classes, the value of property ‘skeletal element portion’ (rdfbones:skeletalElementPortion) or its subproperties is set to 1.

.. [1] Though each segment is a regional part of exactly one skeletal element, class definitions do not contain cardinality restrictions. As ‘regional part of’ (fma:regional_part_of) is a transitive property, OWL modelling prohibits restrictions on cardinality
