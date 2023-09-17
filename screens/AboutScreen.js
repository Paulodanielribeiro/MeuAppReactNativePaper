import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Sobre</Text>
      <Welcome name="Visitante" />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')} // Corrigido para "Home" em vez de "HomeScreen"
      >
        Ir para a tela inicial
      </Button>
    </View>
  );
};

export default AboutScreen;
