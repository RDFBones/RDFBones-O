.. toctree::

OBI modelling of Investigations
================================


.. figure:: ../gfx/OBI-Investigations.svg
   :alt: Scientific investigations as modelled by the OBI. Simplified version of a diagram provided by the OBI workgroup.
   :width: 100.0%


While the OBI models various structures related to scientific research, a central element is the process chain of investigations (see figure above). There are three major phases: 'planning', 'study design execution' and 'drawing a conclusion based on data'. An output of the planning stage is a 'study design' which then is executed in the second stage where data are produced which are interpreted in the third. The OBI requires users to fill in elements that are represented by ‘anon’ placeholders in [fig:OBI_investigations]. First, a more specific subclass of planning needs to be defined, describing the process that leads to the establishment of a study design. Also, the study design execution does not realise the study design directly but some direction concretising the study design in respect of the investigation to be carried out. This mechanism allows study designs to be defined on a general level for use in several investigations. Each investigation interprets the study design in terms of its specific context, e. g. the material to be used or the facilities at disposition. Several classes (not represented in the above figure) are related to class ‘study design’ through the ‘has part’ property, providing specifications for many of the processes and input/output elements subsumed under ‘study design execution’.

‘Study design execution’ consists of a sequence of processes that have input and output objects in a way that the output of the previous is the input to the following. The 'specimen collection process' selects human remains from a collection of material for investigation. The selected material is then referred to as 'specimens'. Specimens can be further processed, e. g. if samples are taken or thin sections produced. Specimens are subjected to a number of assays, e. g. structured observations, measurements or analyses. The resulting data items are understood as measurement data. Data processing can also be part of study design execution, subsuming processes like aggregation of multiple data items, calculations and statistical analyses.

Investigations close with one or several conclusions. Conclusions contain specifications of the data items on which they are based. The OBI also offers conepts for modelling the publication of resulting data items and conclusions in publications (these, however, are not illustrated in the figure above).
