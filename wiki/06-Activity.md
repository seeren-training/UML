# Activity

* 🔖 **Définition**
* 🔖 **Syntaxe**

___

## 📑 Définition

Le diagramme d'activité est l'un des diagrammes comportementaux UML qui peut être utilisé pour modéliser un processus ou un algorithme sous la forme d'une séquence d'étapes. C'est une version plus sophistiquée de son proche cousin le diagramme Flowchart. Les diagrammes d'activités peuvent être utilisés pour modéliser des processus métier.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/06/activity.jpg)

___

## 📑 Syntaxe

### 🏷️ **Initial**

Un élément Initial est utilisé pour définir le début d'un flux lorsqu'une activité est appelée.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-initial.png)

### 🏷️ **Action**

Un élément Action décrit un processus ou une transformation de base qui se produit dans un système et constitue l'unité fonctionnelle de base dans un diagramme d'activité.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-action.png)

### 🏷️ **Partition**

Un élément Partition est utilisé pour organiser logiquement les éléments d'une activité.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-partition.png)

### 🏷️ **Flux**

Le flux de contrôle connecte deux nœuds dans un diagramme d'activité, modélisant une transition active.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/c-controlflow.png)

### 🏷️ **Decision**

Dans un diagramme d'activité ou un diagramme de présentation d'interaction, une décision indique un point de progression conditionnelle: si une condition est vraie, le traitement se poursuit dans un sens; sinon, alors un autre.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-decision.png)

### 🏷️ **Merge**

Un nœud de fusion rassemble un certain nombre de chemins de flux alternatifs dans les diagrammes de synthèse d'activité, d'analyse et d'interaction.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-merge.png)

### 🏷️ **Send**

L'élément Send décrit l'action d'envoi d'un signal, dans un diagramme d'activité.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-send.png)

### 🏷️ **Receive**

Un élément Receive définit l'acceptation ou la réception d'une demande, dans un diagramme d'activité.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-receive.png)

### 🏷️ **Region**

Enterprise Architect prend en charge deux types d'éléments de région: les régions d'expansion et les régions d'activité interruptible.

Une région d'expansion entoure un processus à imposer plusieurs fois aux données entrantes, une fois pour chaque élément de la collection d'entrée.

Une région d'activité interruptible entoure un groupe d'éléments d'activité, tous affectés par certaines interruptions de telle sorte que tous les jetons passant dans la région sont terminés si la ou les interruptions sont déclenchées.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-region.png)

### 🏷️ **Exception**

L'élément Exception Handler définit le groupe d'opérations à effectuer lorsqu'une exception se produit.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/07/e-exception.png)

___

👨🏻‍💻 Manipulation

Représentez les activités qui demandent une éclaircicement logique.

___
