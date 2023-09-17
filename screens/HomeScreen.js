import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper'; 
import Welcome from '../components/Welcome';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tela Inicial</Text>
      <Welcome name="Usuário" />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('About')}
      >
      Ir para a tela 'Sobre'
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Profile')}
      >
        Ir para a tela 'Perfil'
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Settings')}
      >
        Ir para a tela 'Configurações'
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Contact')}
      >
        Ir para a tela 'Contato'
      </Button>
    </View>
  );
};

export default HomeScreen;
