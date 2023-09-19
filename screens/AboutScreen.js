import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Welcome from '../components/Welcome';

const AboutScreen = () => {
  const navigation = useNavigation();

  // Texto resumido sobre o aplicativo
  const aboutText = "Este aplicativo está em desenvolvimento e atualmente em versão beta. Apreciamos sua participação enquanto trabalhamos para torná-lo ainda melhor!";

  return (
    <View>
      <Text>Sobre</Text>
      <Welcome name="Visitante" />

      {/* Texto resumido */}
      <Text>{aboutText}</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')} 
      >
        Ir para a tela inicial
      </Button>

      {/* Botão para voltar */}
      <Button
        mode="outlined"
        onPress={() => navigation.goBack()} 
      >
        Voltar
      </Button>
    </View>
  );
};

export default AboutScreen;
