# Lab 3 : Construire un écran d'accueil défilant avec ScrollView

## Objectif

Ce lab montre comment transformer un écran d'accueil fixe en écran défilant avec le composant ScrollView de React Native.

## Description

L'écran contient un texte en grande taille qui dépasse la hauteur de l'écran. Le composant ScrollView permet de rendre le contenu scrollable avec une barre de défilement blanche pour rester cohérent avec le thème visuel de l'application.

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer l'application :
```bash
npm start
```

Ou avec Expo :
```bash
npx expo start
```

## Structure du projet

- `App.js` - Point d'entrée de l'application
- `WelcomeScreen.js` - Écran d'accueil avec ScrollView
- `components/AppHeader.js` - En-tête de l'application
- `components/AppFooter.js` - Pied de page de l'application

## Fonctionnalités implémentées

- ✅ Utilisation de ScrollView pour le défilement vertical
- ✅ Configuration de la barre de défilement blanche (indicatorStyle="white")
- ✅ Texte long et formaté pour démontrer le défilement
- ✅ Interface cohérente avec thème sombre

## Test

1. Lancer l'application sur un émulateur ou un appareil réel
2. Faire défiler le texte du bas vers le haut
3. Vérifier que tout le contenu est accessible
4. Observer la barre de défilement blanche sur le côté
