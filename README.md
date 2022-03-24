This is the [RDFBones](https://github.com/RDFBones) core ontology for osteological research data from anthropological investigations. All files in the repository need to be loaded into one graph. Currently, the VIVO ontology ([vivo.owl](https://github.com/vivo-project/VIVO/raw/develop/home/src/main/resources/rdf/tbox/filegraph/vivo.owl)) is also required in addition.

The 'robot' directory contains the script [Script-Build_RDFBones-Robot.sh](https://github.com/RDFBones/RDFBones-O/blob/robot/robot/Script-Build_RDFBones-Robot.sh) which can be used to merge the provided files into one OWL file (rdfbones.owl) and check the result for inconsistencies. The oubput can be found in the 'robot/results/' directory. To run the script, you will have to install the [ROBOT tool](https://robot.obolibrary.org/). In order to include the latest file versions from the 'master' branch, you have to rebase the 'robot' branch on 'master'.

Output of the merged ontology is called 'rdfbones.owl'. A reasoner is run on this file to check for inconsistencies. Unsatisfiable classes will be collected in a file 'debug.owl' and need to be evaluated for ontology improvement. Created 'rdfbones.owl' files are not suitable for production until no 'debug.owl' file is created.
