***************************
Guide to using AnthroGraph
***************************
This guide acts as a sort of user manual for the software application AnthroGraph. This guide provides information on the modules that are included in the AnthroGraph system and gives basic information on how they work.


===========================
Skeletal Inventory modules
===========================

The skeletal inventory records basic data on the skeletal individual, such as presence or absence of bones and their taphonomic alterations. Inventories can be created by clicking on the "Skeletal Inventories" link in the sidebar, entering a unique label, and selecting the according inventory type. Inventory types include adult skeletons, juvenile skeletons, and dental inventories. Creating a new inventory automatically redirects the user to the inventory's data entry page.

.. image:: gfx/anthrograph/InventoriesList.png
   :scale: 50 %
   
Once an inventory has been created, it appears in the list above the "Create new inventory" section. Clicking on the inventory name opens the inventory.


------------------------------
Inventory for adult skeletons
------------------------------

Inventories for adult skeletons stand in contrast to inventories for juvenile skeletons. When opening an inventory for adult skeletons, the page opens at the "General information" tab. Above the tabs are 3 important fields:

.. image:: gfx/anthrograph/SkelInventoryGen.png
   :scale: 50 %
   
The Skeletal Inventory ID, also known as the label of the inventory, can be changed by entering a new label in the field and clicking "Change Skeletal Inventory ID".
The "DELETE Entire Skeletal Inventory" button will delete the inventory that is currently open.
The "Download CSV Table" button will generate a comma seperated value (CSV) file containing all the data that has been entered in the inventory.

The general information tab allows the user to enter a comment on the inventory. Further down is the "Create New Observer/Editing Event" section.

.. image:: gfx/anthrograph/SkelInvRoles.png
   :scale: 50 %
   
This allows the user to enter either an "observer" or a "data editor". In either case, a date must be selected as well. The created observer or data editor event will then appear in the list directly below.

.. image:: gfx/anthrograph/CreatedEvent.png
   :scale: 50 %

Clicking on the event will open a new page in a new tab where information on the event can be entered.

.. image:: gfx/anthrograph/EditingEvent.png
   :scale: 50 %
   
Once the data has been entered, this page can be closed. To enter data on the status of the bones, the user must switch to the according tab. In the following image, the cranial tab has been opened:

.. image:: gfx/anthrograph/SkelInventoryCranium.png
   :scale: 50 %
   
This shows some of the items that can entered in the adult skeletal inventory: "Completeness", "Observability", and "Unsided Fragments". One of the "Completeness" fields has been selected in order to show the drop-down menu that opens. In order to save the entered information, the user must have entered data into all mandatory fields. To ensure the user need not enter an entire skeleton in one go, save buttons are bound to sizable units of skeletal regions, such as the frontal bone in the above image.


-------------------------
Inventory of a dentition
-------------------------

Dental inventories are created same as inventories for adult skeletons, save that the "inventory of dentition" must be selected as the inventory type.

.. image:: gfx/anthrograph/DentalInvSelect.png
   :scale: 50 %
   
After creation, dental inventories appear in the inventory list along with all other inventories. The inventory can be opened by clicking on the label.

.. image:: gfx/anthrograph/DentalInvDataset.png
   :scale: 50 %
   
The three options at the top of the inventory page mirrors those of the adult skeletal inventory:

The Skeletal Inventory ID, also known as the label of the inventory, can be changed by entering a new label in the field and clicking "Change Skeletal Inventory ID".
The "DELETE Entire Skeletal Inventory" button will delete the inventory that is currently open.
The "Download CSV Table" button will generate a CSV file containing all the data that has been entered in the inventory.

The general tab allows the user to associate an adult or juvenile skeletal inventory with the dental inventory that is currently opened. The data entry works similar to the adult skeletal inventory in that most fields must have information entered in order for the save button to become enabled. Most fields also produce a drop-down menu with all possible options when clicked.

.. image:: gfx/anthrograph/DentalInvDatasetEntry.png
   :scale: 50 %


===================
Estimation modules
===================

As their name suggests, the age estimation module records information required to estimate the age of a skeleton, while the sex estimation module records the information necessary to estimate the sex of an individual. Both modules require an existing adult or juvenile skeletal inventory to be associated with; the age estimation module further requires a sex to be decided before an age estimation dataset can be created for a skeleton, though the associated sex estimation dataset does not have be created beforehand as well.

---------------
Age Estimation
---------------

Age estimations can be performed by clicking the "Age Estimation" link in the sidebar.

.. image:: gfx/anthrograph/AgeEstList.png
   :scale: 50 %

Age estimations require an adult or juvenile skeletal inventory; at least 3 characters must be entered, which then highlights all inventories that contain those characters in their label and that are eligible as a basis for age estimations.

.. image:: gfx/anthrograph/AgeEstListEntry.png
   :scale: 50 %
   
The estimated sex must be entered first before the age estimation can be created. Once an associated skeletal inventory and sex are selected, the age estimation can be created by clicking "Save".

.. image:: gfx/anthrograph/AgeEstDataset.png
   :scale: 50 %

The label of the age estimation is generated automatically. The selected sex is visible at the top (in the screenshot above: "Selected Biological Sex Role: Male specimen role"). As usual, the button for deleting the age estimation dataset is located at the top in the form of a red button.

Values for the pubic symphysis can only be entered if the respective item is marked as "observable" in the skeletal inventory.


---------------
Sex Estimation
---------------

Sex estimations can be performed by clicking the "Sex Estimation" link in the sidebar.

.. image:: gfx/anthrograph/SexEstList.png
   :scale: 50 %

As with age estimations, sex estimations require an adult or juvenile skeletal inventory; at least 3 characters must be entered, which then highlights all inventories that contain those characters in their label and that are eligible as a basis for sex estimations.

 .. image:: gfx/anthrograph/SexEstDataset.png
   :scale: 50 %
   
The label of the sex estimation is generated automatically. As usual, the button for deleting the sex estimation dataset is located at the top in the form of a red button, where you can also find the button for cownloading the dataset as a CSV file analogous to the option in the adult and juvenile skeletal inventories.

 .. image:: gfx/anthrograph/SexEstValuePattern.png
   :scale: 50 %

With the exception of the comment and observer/data editor fields, all fields in the sex estimation are entered via drop-down menu. Unlike the age estimation module, the sex estimation module does not check whether or not the skeletal element being rated is marked as "observable" in the associated skeletal inventory.


=======================
Paleopathology modules
=======================

The paleopathology modules, also called "paleopath" or just "patho" modules, are split into dental and non-dental datasets, just as the skeletal inventories are. To create a paleopath module, click on the "Paleopath Module" link in the sidebar. You can then choose between the non-dental skeletal inventory "PBP Osteo Paleopath" and the dental inventory "PBP Dental Paleopath".

 .. image:: gfx/anthrograph/PathoList.png
   :scale: 50 %

As with the age- and sex estimations, the inventories to be associated with the paleopath module dataset must be selected by entering at least 3 characters in the according field, which then highlights all inventories that contain those characters in their label and that are eligible as a basis for the respective type of paleopathology dataset. Since dental and non-dental paleopath datasets are seperated into 2 distinct modules, they do not appear in the same list.


---------------------
PBP Dental Paleopath
---------------------

 .. image:: gfx/anthrograph/PathoDentalDummy.png
   :scale: 50 %

Dental paleopath datasets can be filled out similar to inventories. In the image above, a dental paleopath dataset has been filled out with dummy data, and the drop-down menu of a field is opened to show the options for that field. As with non-dental paleopath datasets, when attempting to enter a pathological observation, the respective element must be marked as observable in the associated inventory; if it is not, the drop-down menu may restrict the number of options possible.


--------------------
PBP Osteo Paleopath
--------------------

The osteo paleopath module differs slightly from the other modules in that the dataset allows for many combinations of options, which requires a more complex entry form.

 .. image:: gfx/anthrograph/PathoOsteoDataset.png
   :scale: 50 %
   
First, the region in which the pathology is found must be selected. The user must switch to the tab of the region in which the pathology is found. Then, the user may select the type of pathology, e.g. bone addition or trauma, and then enter a label for the pathology.

 .. image:: gfx/anthrograph/PathoROIEntry.png
   :scale: 50 %

In the image above, a pathology "skull" tab was created under the "bone addition" field with the label "temporal_bone_addition". Once saved, a new page opens, where the region can be further defined for the pathology under the "New ROI Specification" field. Only elements related to the overarching region (in this case the skull/cranium) are available, and only those that are marked as "observable". Multiple regions can be saved, and they will appear in the list below.

 .. image:: gfx/anthrograph/PathoROIAdvanced.png
   :scale: 50 %

When a region has been selected, a new page will open where this region can likewise be further defined. 

 .. image:: gfx/anthrograph/PathoROIAdvPattern.png
   :scale: 50 %

As seen in the image above, a drop-down menu opens in the fields for these details. Once all data has been entered on this page, the user can use the "-> Back to [label] Section Summary" to choose a further region or fill in the "Additional Information" below.

 .. image:: gfx/anthrograph/PathoROIEntrySpecs.png
   :scale: 50 %
   
   
+++++++++++++++++++++++++++
Osteo Paleopath csv export
+++++++++++++++++++++++++++

As with all other modules, an export button exists near the top of the page to download a comma seperated value file for individual instances of osteo paleopath investigations. It is also possible to download all investigation instances by using the download button beneath the "Create New PBP-Paleopathology Instance" field.

 .. image:: gfx/anthrograph/csv_export_button.png
 	:scale: 100%

The SPARQL query used to export these datasets is designed to produce a tabular spreadsheet that is easy to read; however, due to the complexity of the osteo paleopath datasets, even this spreadsheet may not be entirely self-explanatory. This section explains the meaning of each column:

* ID: The label given to the investigation. Since the pathology datasets have their labels automatically generated, the ID will always be the label of the skeletal inventory referenced by the investigation followed by the string "_PBP_Patho_Paleopath".
* SectionName: The label given to the pathology dataset section. Pathology dataset sections effectively represent the individual pathology instances created in the investigation.

 .. image:: gfx/anthrograph/csv_section.png
 	:scale: 100%
 	
The above image shows a portion of a paleopathology dataset as viewed in the visualising software "Ontodia". The main pathology dataset instance (highlighted in blue) has as a part one or more the individual pathology dataset section instances (magenta). Onto these sections are attached - directly or indirectly via intermediary instances (orange), depending on the section type - the measurement data (green).

* SectionType: What type of section the item from the "SectionName" column is, e.g. "Skeletal trauma dataset section", "Bone addition dataset section".
* SectionROI: The region of interest (ROI) referenced by the section. For some types of pathologies, this will be the only ROI necessary to describe a pathology item in full. For others, the column "MeasurementDatumROI" may further pinpoint the pathology (see below).
* MeasurementDatumType: The type of measurement datum being described, e.g. "Anatomical aspect" or "Timing of injury".
* MeasurementDatumROI: The region of interest (ROI) a measurement datum is about. A single pathology dataset section will typically have multiple mesaurement data, and a single measurement datum may appear in multiple rows if it itself has multiple ROIs it affects; i.e. if it has multiple options for the MeasurementDatumROI column.

 .. image:: gfx/anthrograph/csv_MD_ROIS.png
 	:scale: 100%

The image above shows 3MDs of a single bone addition section which has a pathology that goes over 2 ROIs (measurement datum specific ROIS, to be exact, not the section specific ROI). Since the tabular output only has a single column for the ROI, the table must include multiple rows for the same MD, showing one of the ROIs involved each time; the section ROI accordingly is always the larger region the more specific measurement datum ROIs belong to, in this example the skull region. In contrast, some pathologies may have no measurement data at all, such as the "Bone fusion dataset section". In such cases, the section defines what the observation entails (e.g. "the following bones are fused"), and only the ROIs involved will be detailed in each row of the section with the MeasurementDatumType column being blank. These ROIs will be in the section specific ROI column, not the measurement datum specific ROI column, as there are no measurement data to which these ROIs could be attached in the dataset.

* Value: What value the measurement datum has, e.g. "Diffuse" (Type of bony response), "1/3 - 2/3" (Extent of bone surface eburnation), etc.
* ResearchRoleType: If there is a observer or data editing event saved, denotes whether the role is observer or data editor. If a pathology dataset section is noted in the same row, this event is found in that section. If there is none, then the event is about the investigation as a whole.
* ResearchRoleContributor: Denotes the name of the person being referenced in the ResearchRoleType column.
* ContributionDate: The date of the event referenced in the ResearchRoleType column.
* InventoryComment: The comment found in the "General" tab of the according paleopath investigation.
* GeneralAnatomicalRegionComment: The comment found under the "Comment on Pathologies" field in each tab, e.g. Skull, Thorax, etc.
* SpecificPathologyComment: The comment found in a given pathology dataset section instance.
* GeneralContributionComment: The comment found in connection to an event; this type of comment is only found in events concering the investigation as a whole (i.e. there is no item in the section column).
* PathologyObservationContributionComment: The comment found in connection to an event found in a given pathology dataset section instance; analogous to the previous column, this item is only found when there is an item found in the section column specifying the section the event this comment is about is connected to.


The output table is sorted via the following hierarchy of columns, each column being in descending alphabetical order: ID, SectionName, SectionType, and finally MeasurementDatumType

For reference, find below the query used to output the csv table with all investigations. The query used to export a single investigation is the same except for the fact that it replaces the "?subject" variable with the investigation that is currently opened. ::

	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>
	PREFIX obo: <http://purl.obolibrary.org/obo/>
	PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
	PREFIX standards-si: <http://w3id.org/rdfbones/ext/standards-si/>
	PREFIX dc: <http://purl.org/dc/terms/>

	SELECT DISTINCT 

	?ID
	?SectionName
	?SectionType
	?SectionROI
	?MeasurementDatumType
	?MeasurementDatumROI
	?Value

	?ResearchRoleType
	?ResearchRoleContributor
	?ContributionDate
	?InventoryComment
	?GeneralAnatomicalRegionComment
	?SpecificPathologyComment
	?GeneralContributionComment
	?PathologyObservationContributionComment

	 WHERE {
	  ?subject a <http://w3id.org/rdfbones/ext/phaleron-patho/PhaleronPaleopathologyDataset> .
	  ?subject rdfs:label ?ID .
	  {
	    { ?subject rdfs:comment ?InventoryComment 
	    }
	    UNION { 
	      ?subject obo:BFO_0000051 ?section .
	      ?section a ?sectiontype .
	      ?sectiontype rdfs:label ?SectionType .
	      ?sectiontype rdfs:subClassOf <http://w3id.org/rdfbones/ext/phaleron-patho/PathologyComments> .
	      ?section rdfs:comment ?GeneralAnatomicalRegionComment .
	    }
	    UNION {
	    ?subject obo:BFO_0000051 ?section .
	      OPTIONAL { ?section rdfs:label ?SectionName }
	    ?section a ?sectiontype .
	      OPTIONAL { ?section rdfs:comment ?SpecificPathologyComment }
	    VALUES ?sectiontype { <http://w3id.org/rdfbones/ext/phaleron-patho/NonMetricTraitsAndAnomaliesDatasetSection> <http://w3id.org/rdfbones/ext/phaleron-patho/BoneFusionDatasetSection> }
	    ?sectiontype rdfs:label ?SectionType .
	    ?section obo:IAO_0000136 ?SectionROIInst . 
	    ?SectionROIInst a ?SectionROIType .
	    ?SectionROIType a owl:Class .
	      OPTIONAL { ?SectionROIType rdfs:label ?SectionROI } #################################
	  }
	  UNION { 
	    ?subject obo:BFO_0000051 ?section .
	      OPTIONAL { ?section rdfs:comment ?SpecificPathologyComment }
	      OPTIONAL { ?section rdfs:label ?SectionName }
	    ?section a ?sectiontype .
	    ?sectiontype rdfs:label ?SectionType .
	    ?section obo:IAO_0000136 ?SectionROIInst . 
	    ?SectionROIInst a ?SectionROIType .
	    ?SectionROIType a owl:Class .
	      { {?SectionROIInst <http://purl.org/sig/ont/fma/regional_part_of> ?region }
	        UNION
	        { ?SectionROIType rdfs:subClassOf <http://w3id.org/rdfbones/anthrograph/app/phaleron-app/AnatomicalROIGroup> }
	      }
	    ?SectionROIType rdfs:label ?SectionROI .
	    ?section obo:BFO_0000051 ?Tier2MD .
		?Tier2MD a ?Tier2MDType .
	      OPTIONAL { ?Tier2MDType rdfs:label ?MeasurementDatumType }
	      OPTIONAL { ?Tier2MD obo:IAO_0000136 ?Tier2MDROI .
	        		?Tier2MDROI a ?Tier2MDROIType .
	      			?Tier2MDROIType rdfs:label ?MeasurementDatumROI }
	    ?Tier2MD obo:OBI_0001938 ?Tier2VS .
	    ?Tier2VS obo:OBI_0000999 ?value .
	      OPTIONAL { ?value rdfs:label ?Value }
	    }
	    UNION { 
	      ?subject obo:BFO_0000051 ?SizeAndShapeDataset .
	      OPTIONAL { ?SizeAndShapeDataset rdfs:comment ?SpecificPathologyComment }
	      OPTIONAL { ?SizeAndShapeDataset rdfs:label ?SectionName }
	      ?SizeAndShapeDataset obo:BFO_0000051 ?SizeAndShapeROI .
	      ?SizeAndShapeDataset a ?sectiontype .
	      ?sectiontype rdfs:label ?SectionType .
	  	  ?SizeAndShapeROI a ?AnatomicalRegion .
	      ?AnatomicalRegion rdfs:label ?MeasurementDatumROI.
	      ?AnatomicalRegion rdfs:subClassOf ?ROISpecificationClass .
	  	  ?ROISpecificationClass a owl:Class .
	 	  ?ROISpecificationClass rdfs:subClassOf <http://w3id.org/rdfbones/ext/phaleron-patho/RegionalAROISpecification> .
	      ?AnatomicalRegion rdfs:label ?SectionROI .
	      ?SizeAndShapeDataset obo:BFO_0000051 ?Tier2MD .
	      ?Tier2MD a ?Tier2MDType .
		      OPTIONAL { ?Tier2MDType rdfs:label ?MeasurementDatumType }
	      ?Tier2MD obo:OBI_0001938 ?Tier2VS .
	      ?Tier2VS obo:OBI_0000999 ?value .
		      OPTIONAL { ?value rdfs:label ?Value }
	      }
	    UNION {
	    ?subject obo:BFO_0000051 ?section .
	      OPTIONAL { ?section rdfs:comment ?SpecificPathologyComment }
	      OPTIONAL { ?section rdfs:label ?SectionName }
	    ?section a ?sectiontype .
	    ?sectiontype rdfs:label ?SectionType .
	    ?section obo:IAO_0000136 ?SectionROIInst .
	      OPTIONAL { ?SectionROIInst rdfs:label ?SectionROI }
	    ?section obo:BFO_0000051 ?Tier2MD .
	  	?Tier2MD obo:IAO_0000136 ?Tier2MDROI .
	    ?Tier2MDROI a ?Tier2MDROIType .
	    ?Tier2MDROIType rdfs:label ?MeasurementDatumROI .
	    ?Tier2MD obo:BFO_0000051 ?Tier3MD .
	    ?Tier3MD a ?Tier3MDType .
	      OPTIONAL { ?Tier3MDType rdfs:label ?MeasurementDatumType }
	    ?Tier3MD obo:OBI_0001938 ?Tier3VS .
	    ?Tier3VS obo:OBI_0000999 ?value .
	      OPTIONAL { ?value rdfs:label ?Value }
	    }
	  UNION
	  {
	?investigation obo:OBI_0000299 ?subject .
	?investigation obo:BFO_0000051 ?ContribProcess .
	?ContribProcess a <http://w3id.org/rdfbones/ext/phaleron-patho/ResearchContributionProcess> .
	?ContribProcess rdfs:label ?TypeOfContribution .
	?ResearchRole obo:BFO_0000054 ?ContribProcess .
	?ResearchRole a ?RoleType .
	?RoleType rdfs:label ?ResearchRoleType .
	?ContribProcess obo:RO_0000057 ?participant .
	?participant rdfs:label ?ResearchRoleContributor .
	?ContribProcess dc:date ?ContributionDate .
		OPTIONAL {?ContribProcess rdfs:comment ?GeneralContributionComment } 
	  }
	  UNION
	  {
	?investigation obo:OBI_0000299 ?subject .
	?subject obo:BFO_0000051 ?section.
	?section rdfs:label ?SectionName .
	?investigation obo:BFO_0000051 ?PathoObservation .
	?PathoObservation a ?PathoObservationType .
	?PathoObservationType rdfs:subClassOf <http://w3id.org/rdfbones/ext/phaleron-patho/PaleopathologicalObservation> .
	?PathoObservation obo:OBI_0000299 ?section .
	?PathoObservation obo:BFO_0000051 ?ContribProcess .
	?ContribProcess a <http://w3id.org/rdfbones/ext/phaleron-patho/ResearchContributionProcess> .
	?ContribProcess rdfs:label ?TypeOfContribution .
	?ResearchRole obo:BFO_0000054 ?ContribProcess .
	?ResearchRole a ?RoleType .
	?RoleType rdfs:label ?ResearchRoleType .
	?ContribProcess obo:RO_0000057 ?participant .
	?participant rdfs:label ?ResearchRoleContributor .
	?ContribProcess dc:date ?ContributionDate .
		OPTIONAL { ?ContribProcess rdfs:comment ?PathologyObservationContributionComment }
	  }

	}
	}
	ORDER BY ?ID ?SectionName ?SectionType ?MeasurementDatumType