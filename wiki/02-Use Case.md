# Use Case

* 🔖 **Définition**
* 🔖 **Syntaxe**
* 🔖 **Logiciel**

___

## 📑 Définition

Un cas d'utilisation est une liste d'actions définissant les interactions entre un acteur et un système pour atteindre un objectif. L'acteur peut être un humain ou un autre système externe.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/01-Use-Case.jpg)

___

## 📑 Syntaxe

### 🏷️ **Acteur**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/actor.png)

Un acteur est un utilisateur du système; utilisateur peut signifier un utilisateur humain, une machine ou même un autre système ou sous-système du modèle.

### 🏷️ **System**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/system.png)

Un System est un élément non UML utilisé pour définir les limites conceptuelles.

### 🏷️ **Use Case**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/usecase.png)

Un cas d'utilisation est un élément de modélisation UML qui décrit comment un utilisateur du système proposé interagit avec le système pour effectuer une unité de travail discrète.


### 🏷️ **Associate**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/associate.png)

Une association implique que deux éléments de modèle ont une relation, généralement implémentée en tant que variable d'instance dans une ou les deux classes. 

> L'association n'est pas dirigée. Pour différencier une association allant d'un acteur à un use case et l'inverse il est courant de nommer l'action de l'association allant vers un acteur.

### 🏷️ **Include**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/include.png)

Une connexion Include indique que l'élément source inclut les fonctionnalités de l'élément cible.

### 🏷️ **Extend**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/extend.png)

Un connecteur d'extension est utilisé pour indiquer qu'un élément étend le comportement d'un autre.

> Cela suppose que le use case étendu doit être associé pour que l'extension soit également associée sous condition.

___

## 📑 Logiciel

Plusieurs logiciels permettent de modéliser, notre objectif et de procéder à une manipulation rapide sans être géné par la compréhension de l'outil.

* Enterprise Architect
* Visio
* ArgoUml
* BOUML
* PlantUML
* StarUML

L'URSSAF utilise Enterprise Architect par exemple qui est un outil complet mais qui demande une courbe d'apprentissage longue. 

> Pour rester focus sur UML et ne pas avoir de contrainte logiciel je préconise actuellement StarUML qui possède une interface dépouillée. Vous pouvez exporter votre diagramme sous forme d'image et de fragment pour qu'il puisse être importé dans un autre fichier de travail.
___

👨🏻‍💻 Manipulation

Installer un logiciel UML puis proposer les use cases diagrammes des projets respectifs au niveau des objectifs utilisateur sans détail. Les pousser sur le repository ou un autre dédié.

___