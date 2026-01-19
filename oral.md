# Présentation Orale - Projet ARCANA

**Durée totale : 10 minutes**  
**Membres du groupe : Khadija BOUFENECHE, Charline PERCHERON**

---

## 1. Introduction et Présentation du Projet (1 min 30)

**Bonjour à tous,**

Nous sommes Khadija BOUFENECHE et Charline PERCHERON, et nous allons vous présenter notre projet web : ARCANA, une agence de tourisme digitale spécialisée dans les expériences immersives.

### Choix du thème

Le nom ARCANA vient du latin et signifie « secret » et « mystère caché ». Nous avons choisi ce thème car nous souhaitions créer une agence qui propose des expériences authentiques et exclusives, loin du tourisme de masse. Notre idée de départ était de concevoir une plateforme qui mettrait en relation des professionnels passionnés avec des particuliers en quête d'expériences mémorables et singulières.

### Répartition du travail

Nous avons organisé notre travail en nous répartissant les tâches de manière équitable :
- **Khadija** : Développement de la page d'accueil et de la page "À propos"
- **Charline** : Conception et développement des pages d'expériences (jeunes fougueux, familles), création du système de carrousels pour les galeries photos, page de réservation, et tout le reste du site

Nous avons également travaillé ensemble sur la cohérence graphique globale du site et la validation du contenu.

---

## 2. Démarche de Construction du Site (3 min)

### Architecture et structure du site

Notre site web est organisé autour de plusieurs pages principales :
- Une **page d'accueil** qui présente nos trois univers de voyage
- Une **page Expériences** qui détaille les différentes offres
- Une **page Réservation** pour permettre aux visiteurs de nous contacter
- Une **page À propos** qui raconte l'histoire et les valeurs d'ARCANA

### Technologies utilisées

Pour ce projet, nous avons utilisé les technologies suivantes :
- **HTML5** (HyperText Markup Language) : c'est le langage qui structure le contenu de nos pages web, comme les titres, les paragraphes et les images
- **CSS3** (Cascading Style Sheets) : c'est le langage qui définit l'apparence visuelle du site, les couleurs, les espacements et les mises en page
- **JavaScript** : c'est le langage de programmation qui permet d'ajouter de l'interactivité, notamment pour les carrousels d'images qui défilent automatiquement

### Fonctionnalités principales développées

#### La barre de navigation
Nous avons créé une **barre de navigation** (menu en haut du site) qui reste cohérente sur toutes les pages et permet de se déplacer facilement entre les différentes sections du site.

#### Le design adaptatif (responsive)
Nous avons implémenté ce qu'on appelle le **responsive design**, c'est-à-dire que notre site s'adapte automatiquement à la taille de l'écran utilisé. Que vous consultiez le site sur un ordinateur, une tablette ou un téléphone portable, la mise en page se réorganise pour offrir une expérience de navigation optimale.

#### Les carrousels d'images
Sur les pages de détail des expériences, nous avons développé des **carrousels**, c'est-à-dire des galeries d'images qui défilent automatiquement ou sur lesquelles on peut cliquer pour naviguer. Cela permet de présenter plusieurs photos de chaque expérience de manière dynamique et attractive.

#### L'optimisation des performances
Nous avons également travaillé sur l'optimisation du site en utilisant le **préchargement des polices** (preload), une technique qui permet de charger les polices de caractères personnalisées plus rapidement pour améliorer la vitesse d'affichage du site.

---

## 3. Difficultés Rencontrées et Solutions Trouvées (2 min 30)

### Difficultés collectives

#### Problème 1 : Cohérence visuelle entre les pages
**Difficulté** : Au début du projet, chacune de nos pages avait un style légèrement différent car nous travaillions séparément.

**Solution** : Nous avons créé un fichier CSS commun appelé `styles.css` qui contient tous les éléments de style partagés (couleurs, typographie, styles de boutons). Cela nous a permis d'assurer une cohérence visuelle sur l'ensemble du site.

#### Problème 2 : Navigation et chemins relatifs
**Difficulté** : Les liens entre les pages ne fonctionnaient pas correctement car les chemins d'accès aux fichiers et aux images étaient mal configurés selon la profondeur des dossiers.

**Solution** : Nous avons restructuré notre arborescence de fichiers et utilisé des chemins relatifs cohérents (avec `../` pour remonter dans les dossiers parents) pour que tous les liens fonctionnent correctement.

#### Problème 3 : Compatibilité des polices personnalisées
**Difficulté** : Les polices personnalisées que nous voulions utiliser ne s'affichaient pas correctement sur tous les navigateurs.

**Solution** : Nous avons utilisé le format WOFF2 (Web Open Font Format 2) qui est compatible avec tous les navigateurs modernes, et nous avons ajouté une propriété `font-display: swap` qui permet d'afficher temporairement une police système en attendant le chargement de notre police personnalisée.

### Difficultés individuelles

#### Khadija : L'adaptation responsive et la cohérence visuelle
**Difficulté** : Faire en sorte que la page d'accueil et la page "À propos" s'affichent correctement sur différentes tailles d'écran était un défi, notamment pour la mise en page avec les sections alternées.

**Solution** : J'ai utilisé les **media queries**, qui sont des règles CSS permettant d'appliquer des styles différents selon la taille de l'écran. Par exemple, sur mobile, les sections qui s'affichent côte à côte sur ordinateur se superposent verticalement.

**Réussite dont je suis fière** : La page "À propos" avec ses blocs alternés (texte à gauche puis à droite) qui s'adaptent parfaitement sur mobile tout en gardant une présentation élégante sur grand écran.

#### Charline : Le développement des carrousels
**Difficulté** : La création de carrousels interactifs en JavaScript était complexe, notamment pour gérer le défilement automatique et les boutons de navigation.

**Solution** : J'ai créé un fichier JavaScript réutilisable pour chaque carrousel, en utilisant des fonctions qui gèrent le changement d'images à intervalles réguliers et qui permettent à l'utilisateur de naviguer manuellement entre les photos.

**Réussite dont je suis fière** : J'ai réussi à créer un système de carrousel modulaire qui peut être facilement réutilisé sur différentes pages en changeant simplement les paramètres, ce qui rend le code maintenable et évolutif.

---

## 4. Bilan Technique et Humain (2 min 30)

### Bilan de Khadija

#### Compétences techniques développées :
- **Responsive design** : J'ai appris à utiliser les media queries et les unités de mesure adaptatives (pourcentages, vw, vh) pour créer des interfaces qui s'adaptent à tous les écrans
- **CSS avancé** : J'ai découvert des techniques de mise en page modernes comme Flexbox et Grid qui permettent de positionner les éléments de manière flexible
- **Accessibilité web** : J'ai pris conscience de l'importance de créer un site accessible à tous, notamment en utilisant correctement les balises sémantiques HTML

#### Compétences techniques renforcées :
- Ma connaissance du HTML et du CSS de base
- Ma capacité à organiser et structurer du contenu web

#### Qualités développées :
- **Créativité** : Ce projet m'a permis d'exprimer ma créativité en concevant des mises en page esthétiques et en choisissant des combinaisons de couleurs harmonieuses
- **Résolution de problèmes** : J'ai développé ma capacité à analyser un problème technique et à trouver des solutions alternatives

#### Qualités renforcées :
- **Communication** : Travailler en binôme m'a obligée à communiquer clairement mes idées et à coordonner mon travail avec celui de ma coéquipière
- **Sens du détail** : J'ai renforcé mon attention aux détails pour assurer une cohérence visuelle parfaite sur l'ensemble du site

### Bilan de Charline

#### Compétences techniques développées :
- **JavaScript** : J'ai appris à créer des fonctions interactives et à manipuler le DOM (Document Object Model), c'est-à-dire la structure de la page web, pour créer des éléments dynamiques
- **Optimisation web** : J'ai découvert l'importance de l'optimisation des ressources (images, polices) pour améliorer la vitesse de chargement du site
- **Architecture de projet** : J'ai compris l'importance d'organiser correctement les fichiers et de créer du code réutilisable

#### Compétences techniques renforcées :
- La maîtrise du HTML et du CSS que j'avais acquise précédemment
- La capacité à déboguer mon code en utilisant les outils de développement du navigateur

#### Qualités développées :
- **Autonomie** : J'ai appris à chercher des solutions par moi-même en consultant la documentation et des forums spécialisés
- **Rigueur** : La programmation m'a appris à être très attentive aux détails car une simple erreur de syntaxe peut empêcher tout un script de fonctionner

#### Qualités renforcées :
- **Persévérance** : Face aux bugs et aux difficultés techniques, j'ai développé ma capacité à ne pas abandonner et à tester différentes approches
- **Organisation** : Gérer plusieurs fichiers JavaScript et CSS m'a obligée à structurer mon travail de manière méthodique

---

## 5. Conclusion (30 secondes)

Ce projet nous a permis de créer un site web complet et fonctionnel pour ARCANA, tout en développant nos compétences techniques en développement web et nos qualités humaines comme le travail d'équipe et la persévérance.

Nous sommes particulièrement fières d'avoir surmonté les défis techniques rencontrés et d'avoir créé un site qui reflète l'identité mystérieuse et immersive de notre agence de tourisme.

**Merci de votre attention. Nous sommes maintenant prêtes à répondre à vos questions.**

---

## Notes importantes pour la présentation

### Points à ne pas oublier :
- ✅ Expliquer chaque terme technique utilisé
- ✅ Utiliser le vocabulaire correct (« barre de navigation » et non « nav barre »)
- ✅ Montrer le site pendant la présentation pour illustrer les propos
- ✅ Répartir équitablement le temps de parole (5 min chacune)
- ✅ Ne pas lire les notes mais s'en servir comme guide
- ✅ Maintenir le contact visuel avec l'auditoire
- ✅ Parler avec enthousiasme et conviction

### Distribution du temps de parole suggérée :
- **Introduction** (1 min 30) : Charline
- **Démarche de construction** (3 min) : Les deux alternativement (1 min 30 chacune)
- **Difficultés et solutions** (2 min 30) : Khadija pour les difficultés collectives (1 min), puis chacune présente ses difficultés individuelles (45 sec chacune)
- **Bilan** (2 min 30) : Chacune présente son bilan (1 min 15 chacune)
- **Conclusion** (30 sec) : Les deux ensemble ou l'une des deux

### Démonstration du site :
Avoir le site ouvert dans le navigateur et montrer :
1. La page d'accueil avec le responsive (redimensionner la fenêtre)
2. Un exemple de carrousel sur une page d'expérience
3. La cohérence de la barre de navigation entre les pages
4. La page "À propos" avec ses blocs alternés
