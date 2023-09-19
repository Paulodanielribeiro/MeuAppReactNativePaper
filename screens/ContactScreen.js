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
        onPress={() => navigation.navigate('Settings')} 
      >
        Ir para Configurações
      </Button>
    </View>
  );
};

export default ContactScreen;