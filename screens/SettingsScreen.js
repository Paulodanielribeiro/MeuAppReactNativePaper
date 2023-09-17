import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Welcome from '../components/Welcome';

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Configurações</Text>
      <Welcome name="Alice" />
      <Button
        onPress={() => navigation.navigate('ProfileScreen')} // Navega para a tela "ProfileScreen"
      >
        Ir para o Perfil
      </Button>
    </View>
  );
};

export default SettingsScreen;
