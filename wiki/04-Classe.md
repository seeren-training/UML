# Classe

* 🔖 **Structure**
* 🔖 **Modifieurs**
* 🔖 **Attributs**
* 🔖 **Opérations**
* 🔖 **Relations**
* 🔖 **Généralisation**
* 🔖 **Interfaces**

___

## 📑 Structure

> Pour faire le lien avec la programmation procédurale. Voyez la classe comme un fichier qui rassemble des variables et des fonctions avec une syntaxe différente.

Une classe possède un identifiant, une structure avec ses attributs puis un comportement avec ses opéations (méthodes). Contraitement à la programmation fonctionnelle elle permet de réutiliser des attributs (variables) et des opéations (fonctions) pour le contexte d'éxécution de la classe. 

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/class.png)

Une classe s'instancie avec l'opérateur d'instanciation pour obtenir un objet qui correspond à l'objet en cours de manipulation au sein de la classe et donc au contexte d'exécution. L'objet construit est du type de la classe, John est de type Employee.

```js
const john = new Employee();
const bryan = new Employee();
```

Chaque objet possède les attributs et méthodes dont les valeurs sont rattachées au context d'exécution, John peut avoir un salaire différent de Bryan.


### 🏷️ **Identifiant**

L'identifiant d'une classe doit respecter les convention de nommage d'un langage cible. Généralent en `PascalCase` ou `StudlyCaps`.
___

## 📑 Modifieurs

Les attributs et méthodes possèdent un modifieur qui définit un niveau de visibilité. En UML il existe 4 niveaux de visibilité.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/visibility.png)

### 🏷️ **Public**

Déclarez un attribut ou une opération public si vous souhaitez qu'il soit accessible directement par toute autre classe.

### 🏷️ **Protected**

Les éléments protégés déclarés sur les classes sont accessibles par des méthodes qui font partie de votre classe et également par des méthodes qui sont déclarées sur n'importe quelle classe qui hérite de votre classe

### 🏷️ **Package**

Les classes en dehors du package ne peuvent pas accéder aux attributs ou opérations protégés même s'il s'agit d'une classe héritée. En pratique, la visibilité du package est plus utile lorsque vous souhaitez déclarer une collection de méthodes et d'attributs dans vos classes qui ne peuvent être utilisés que dans votre package.

### 🏷️ **Private**

Seule la classe qui contient l'élément privé peut voir ou travailler avec les données stockées dans un attribut privé ou appeler une opération privée

___

## 📑 Attributs

> La programmation objet propose l'encapsulation de donnée dans une structure et la protéction de leur intégrité avec les modifieurs: un attribut n'a aucune raison d'être public.

Les attributs possèdent un niveau de visibilité, un identifiant, un type. Optionelement il peuvent posséder une valeur, être une feuille ou être statique.

### 🏷️ **Identifiant**

L'identifiant de l'attribut doit respecter les convention de nommage d'un langage cible. Généralent en `camelCase`.

### 🏷️ **Type**

Afin de pouvoir traduire votre diagramme en code source il est conseillé d'aligner vos types sur celui d'un langage cible. Référez vous à l'arborescence des types du langage.

* 🔗 [Java Data Types](https://static.javatpoint.com/images/java-data-types.png)

* 🔗 [JavaScript Data Types](https://www.c-sharpcorner.com/article/datatypes-in-javascript/Images/Presentation20.jpg)

* 🔗 [TypeScript Data Types](https://objectcomputing.com/files/2815/7237/9988/1911-sett-img01.png)

En dehors des Built In types et come chaque classe est un type vous pouvez spécifier un User Defined Type.

### 🏷️ **Valeur**

Un attribut peut posséder une valeur d'initialisation en utilisant l'opérateur d'affectation.

```js
+ name: String = "John"
```
___

## 📑 Opérations

> Une opération propose une manipulation extérieure pour exécuter un comportement d'appuyant éventuellement sur les attributs dont le niveau de visibilité est restreint: les opérations sont généralement publiques.

Les opérations possèdent un niveau de visibilité, un identifiant, un type de retour. Optionelement il peuvent posséder des arguments, être une feuille ou être statique.

### 🏷️ **Identifiant**

L'identifiant de l'attribut doit respecter les convention de nommage d'un langage cible. Généralent en `camelCase`.

### 🏷️ **Type**

Le type se spécifie après une colonne (:) et la règle est la même que pour les attributs.

### 🏷️ **Arguments**

Les arguments sont optionnels, ils ne sont pas limités en nombre, ils possèdent un identifiant, un type et optionnelement une valeur (ils sont semblables à la notaiton des attributs). Les arguments possédent une valeur se placent à la fin de la liste des arguments.

```js
+ createProduct(name: String, color: String = "White"): void
```

___

👨🏻‍💻 Manipulation

Pour votre dernier programme, proposer un diagramme de classe contenant des classes avec ses attributs et ses méthodes. Apportez un soin à la couleurs, taille, alignements.

___

## 📑 Relations

### 🏷️ **Association**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/associate.png)

Une association implique que deux éléments de modèle ont une relation, généralement implémentée en tant que variable d'instance dans une des deux Classes.

### 🏷️ **Dépendance**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/dependency.png)

Une dépendance est une relation qui signifie qu'un élément nécessite un autre élément pour sa spécification ou son implémentation. Toute modification de la classe en dépendance peut casser le fonctionnement de la classe dépendante.

### 🏷️ **Agrégation**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/aggregate.png)

Un connecteur d'agrégation est un type d'association qui montre qu'un élément contient ou est composé d'autres éléments. L'enfant peut exister indépendemment du parent.

### 🏷️ **Composition**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/compose.png)

Une composition est utilisée pour représenter un élément composé de composants plus petits, généralement dans une association de diagrammes de classes ou de packages qui montre qu'un élément contient ou est composé d'autres éléments. L'enfant ne peut pas exister indépendemment du parent. 

___

👨🏻‍💻 Manipulation

Complétez votre diagramme en ajoutant/modifiant les attributs et en spécifiant les relations entre classes

___

## 📑 Généralisation

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/generalize.png)

Une généralisation est une relation taxonomique entre un classificateur plus général et un classificateur plus spécifique. Chaque instance du classificateur spécifique est également une instance indirecte du classificateur général. Ainsi, le classificateur spécifique hérite des fonctionnalités du classificateur plus général.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/generalisation.jpg)

> L'héritage précise que la classe fille hérite de tous les attributs et méthodes, qu'ils soient publics, protégés ou privés. Cependant, elle ne peut pas utiliser directement les attributs et méthodes privés (que ce soit en lecture ou en écriture), sauf par l'intermédiaire d'une méthode héritée (publique ou protégée). 

Pratique pour factoriser des attributs et opérations, il faut que la relation soit logique. Mon sous type est un super type? 

### 🏷️ **Substitution**

Un canard en plastique ne doit pas hériter d'un canard parce que c'est un jouet.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/01-LSP.jpg)

___

👨🏻‍💻 Manipulation

Complétez votre diagramme en ajoutant/modifiant les attributs et en spécifiant les généralisations

___

## 📑 Interfaces

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/interface.jpg)

Une interface est une spécification de comportement (ou contrat) que les implémenteurs acceptent de respecter. Les interfaces en UML ne possèdent que des spécification d’opérations publiques.

### 🏷️ **Représentation**

Se représente sous forme de rond sans détail ou dans un rectangle avec détail.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/interface-exemple.png)

### 🏷️ **Interface Realization**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/realize.png)

Un objet source implémente ou réalise son objet de destination.

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/03/realization.jpg)

La classe qui implémente une interface doit implémenter l'es opérations déclarés, soit directement soit complété par un parent. 

___

## 📑 Classes abstraites

Les classes abstraites ne peuvent pas s'instancier et proposent comme les interfaces de paser des contrats. L'înteret de son utilisation est de mettre en place le pattern template methode. C'est à dire une méthode public qui utilise en contrat protected.

___

👨🏻‍💻 Manipulation

Complétez votre diagramme en ajoutant les implémentations et généralisations si elles concernent votre code source.

___