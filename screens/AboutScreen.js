import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Importe a função useNavigation

const AboutScreen = () => {
  const navigation = useNavigation(); // Inicialize a navegação

  return (
    <View>
      <Text>Sobre</Text>
      <Welcome name="Visitante" />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')} // Navegue para a tela "Home" ao pressionar o botão
      >
        Ir para a tela inicial
      </Button>
    </View>
  );
};

export default AboutScreen;
