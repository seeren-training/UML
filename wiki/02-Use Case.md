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

> Le principe [GRASP Controller](https://fr.wikipedia.org/wiki/GRASP_(programmation)#Contr%C3%B4leur) nous indique "*Le controlleur à la responsbilité de traiter les événements du système à une classe non-UI qui représente l'ensemble du système ou d'un scénario cas d'utilisation*". De ce fait voyez vos use case comme les actions d'un controller.

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


### 🏷️ **Generalization**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/02/generalize.png)

S'utilise pour indiquer un héritage, entre acteurs notamment.

___

👨🏻‍💻 Manipulation

Pour votre dernier programme, proposer le/les use cases diagrammes au niveau objectifs utilisateur.

___