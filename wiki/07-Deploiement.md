# Déploiement

* 🔖 **Définition**
* 🔖 **Syntaxe**

___

## 📑 Définition

Un diagramme de déploiement sert à représenter l'utilisation de l'infrastructure physique par le système et la manière dont les composants du système sont répartis ainsi que leurs relations entre eux. 

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/06/01-Deployment.jpg)

___

## 📑 Syntaxe

### 🏷️ **Actor**

🔗 [Use Case](https://github.com/POEC-20-05/UML/wiki/02) / Syntaxe

### 🏷️ **Node**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/06/node.jpg)

Un nœud est un équipement physique sur lequel le système est déployé, tel qu'un serveur de groupe de travail ou une station de travail. Considérez le comme un espace de stockage accueillant des artefacts ou des composants.

### 🏷️ **Component**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/06/component.jpg)

Un composant est une partie modulaire d'un système, dont le comportement est défini par ses interfaces fournies et requises. Considérez le comme un composant matériel ou un driver requis.

### 🏷️ **Artifact**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/06/artifact.jpg)

Un artefact est toute information physique utilisée ou produite par un système.

### 🏷️ **Deployment**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/06/deployment.jpg)

Un déploiement est un type de relation de dépendance qui indique le déploiement d'un artefact sur un nœud ou une cible exécutable.

### 🏷️ **Communication**

![image](https://raw.githubusercontent.com/seeren-training/UML/master/wiki/resources/06/communication.jpg)

Un chemin de communication définit le chemin par lequel deux éléments peuvent échanger des signaux et des messages.

___

👨🏻‍💻 Manipulation

Interrogez vous sur les nœuds requis pour un déploiement sur mobile et/ou web en fonction de votre projet et représentez dans un premier temps les nœuds et artefacts. Dans un second temps mettez les en relation.

___

> UML n'est pas une méthode mais nous pouvons nous servir de son découpage par "vue". Si vous souhaitez d'être plus précis sur son intégration le long d'un cycle de vie application vous trouverez le support complémentaire suivant: [https://github.com/seeren-training/Methodo/wiki](https://github.com/seeren-training/Methodo/wiki)