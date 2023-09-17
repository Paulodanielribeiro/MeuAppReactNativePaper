import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Welcome from '../components/Welcome';

const ContactScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Contato</Text>
      <Welcome name="Emily" />

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Settings')} // Navega para a tela "Settings"
      >
        Ir para Configurações
      </Button>
    </View>
  );
};

export default ContactScreen;