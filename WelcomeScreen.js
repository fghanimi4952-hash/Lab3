// WelcomeScreen.js
import * as React from 'react';
import { ScrollView, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle="white"
      style={{ flex: 1 }}
    >
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          color: '#EDEFEE',
          textAlign: 'center',
        }}
      >
        Bienvenue dans l'application Mobile Academy.
        Ce texte d'accueil est volontairement long pour tester le défilement.
        Ajoute des phrases supplémentaires pour simuler un vrai texte de présentation,
        des consignes d'utilisation et quelques informations sur l'objectif
        du module ou de l'application.
        Plus le texte est long, plus l'effet de défilement sera visible
        sur l'émulateur ou l'appareil réel.
        {'\n\n'}
        Cette application vous permet de découvrir les fonctionnalités
        de base de React Native, notamment l'utilisation du composant ScrollView
        pour créer des écrans défilants.
        {'\n\n'}
        Le ScrollView est essentiel lorsque le contenu dépasse la taille
        de l'écran. Il permet à l'utilisateur de faire défiler verticalement
        pour accéder à tout le contenu.
        {'\n\n'}
        Dans ce lab, nous avons appris à :
        - Remplacer un View par un ScrollView
        - Configurer la barre de défilement avec indicatorStyle
        - Créer une expérience utilisateur fluide et intuitive
        {'\n\n'}
        Continuez à faire défiler pour voir la fin de ce message d'accueil.
        {'\n\n'}
        Merci d'utiliser l'application Mobile Academy !
      </Text>
    </ScrollView>
  );
}
