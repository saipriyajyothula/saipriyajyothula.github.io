VIZBOOKS

Video link: https://vishnusri-gmail.tinytake.com/sf/MTA5MDU3M180MzUxMDMw

A much detailed report can be found here: https://rawgit.com/saipriyajyothula/vizbooks/final/Vizbooks.pdf

INSTALLATION INSTRUCTIONS

Download the NLTK corbora (use nltk.download in python)

pip install -r requirements.txt



![landing_page](https://cloud.githubusercontent.com/assets/22560070/19956804/3874794c-a15e-11e6-90d1-81c40636335c.PNG)

VISUALIZATION ONE
 
The first visualization is a radial tree containing spokes that represent chapters (segments) and sub-spokes that represent the paragraph segments. The sub-spokes have the interaction element to them. 
![2](https://cloud.githubusercontent.com/assets/22560070/19956805/38752612-a15e-11e6-9984-2b0a258773f2.PNG)
Figure: The image shows the overall positivity and negetivity within the book

![3](https://cloud.githubusercontent.com/assets/22560070/19956806/38777516-a15e-11e6-8921-b7e47aefcf3c.PNG)
Figure: Overall positivity and negativity shown solely for uncollapsed spokes


A user can either select to see the overall ebb and flow of positivity and negativity in the book or (individual) emotions such as anticipation, sadness, disgust, joy, anger, surprise, fear, and trust. Each of these emotions is color-coded with intuitive shades for easy understanding. Red for negative, blue for positive. An emotion can be checked from the given options to view the paragraphs with a majority of sentences with just that emotion. Multiple such emotions may be selected or checked. Upon selecting one spoke of the paragraph-segment, a pie chart next to the radial tree will show the division of all the emotions within that segment. Otherwise, the pie-chart will show the overall sentiment distribution for all the un-collapsed chapter-segment spokes.

![4](https://cloud.githubusercontent.com/assets/22560070/19956803/387312dc-a15e-11e6-81ef-a7cae61a9f4f.PNG)
Figure: Overall emotion distribution and corresponding pie-chart

![5](https://cloud.githubusercontent.com/assets/22560070/19956807/38787df8-a15e-11e6-99c2-510f60a971e9.PNG)
Figure: Overall emotion of uncollapsed images with textbox displaying text of selected node

This visualization supports all search and most analyze tasks. Within search, the user can intuitively explore through the myriad of emotions within the book, browse and locate in case they are familiar with the book, and look up if they have a certain emotion in mind and are exploring just that. Within analyze, the visualization supports tasks such as present, discover, enjoy and annotate.The second and third visualizations rely heavily on the chapters that are selected here. Changing the selection of the chapter here, in the first visualization affects the structures of the second and third visualizations.

VISUALIZATION TWO

 
The second visualization draws on data from the first visualization. Here, we try to map all the emotions the ten key characters in the book are either experiencing or associated with. 

![7](https://cloud.githubusercontent.com/assets/22560070/19956808/38b6e160-a15e-11e6-9161-547adfa61907.PNG)

This humanizes the project further as more often than not, readers are attached to and grow fond of a single (or multiple) character/s. This facilitates them to select just a single character and see the intensity of the emotions (that are conveyed by the thickness of the path) as they flow from the character’s name towards the emotion spectrum. 

![11](https://cloud.githubusercontent.com/assets/22560070/19956810/38b6f254-a15e-11e6-9634-fd438517e42e.PNG)

Interaction includes choosing just one chapter in the first visualization to see the character-to-emotion map just for that chapter. However, it can be a standalone visualization in itself.

Furthermore, brushing and linking has been implemented both ways: we can click on simply one character to change the force-layout graph of the third visualization on the right. Similarly, we can choose only one of the emotions on the left side of the second visualization to change the force-directed layout on the right to change its structure. 

![10](https://cloud.githubusercontent.com/assets/22560070/19956812/38b87c78-a15e-11e6-9358-d256df561682.PNG)

These second and third visualizations have a relationship with the first one as well. The second and third visualizations only show the filtered data of the chapters that are not collapsed in the first visualization.

It supports some tasks in analysing and most tasks in query actions. Few such tasks include comparing, summarizing, identifying apart from discovering and enjoying. The visualization supports all the search tasks – lookup, locate, browse and explore.

VISUALIZATION THREE

The third visualization is a force-directed graph illustrating the emotional intensity of character interactions. Each character is represented by a point mark and the interaction is represented between two nodes using a line mark. Channels control the overall layout and understanding of the visualization. More the thickness of the line, greater the score of that particular emotion. Colors of all the emotions are the same throughout the three visualizations in order to maintain uniformity across the dashboard. The thickness between two characters indicates the density of their interactions. The distance between two nodes conveys nothing.

![8](https://cloud.githubusercontent.com/assets/22560070/19956809/38b6fc90-a15e-11e6-89dd-ed7e7f6e0d87.PNG)

The structure of the graph layout changes as we select chapters in the first visualization and emotions within the second visualizations, thereby, implementing brushing and linking. Most of the task abstractions are preserved throughout this visualization as well. Major tasks that are supported are compare and identify within the query  action; explore within the search action and finally present, discover, enjoy within the analyze (consume) action.

![9](https://cloud.githubusercontent.com/assets/22560070/19956811/38b73a34-a15e-11e6-9fd6-28da30e17ced.PNG)








