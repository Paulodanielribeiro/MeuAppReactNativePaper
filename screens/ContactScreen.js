import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Welcome from '../components/Welcome';

const ContactScreen = ({ navigation }) => {
  // Informações de contato
  const contactInfo = "Entre em contato conosco pelo e-mail: Matogrossodosul@gmail.com";

  return (
    <View>
      <Text>Contato</Text>
      <Welcome name="Daneil" />

      {/* Informações de contato */}
      <Text>{contactInfo}</Text>

      {/* Botão para ir para Configurações */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Settings')} 
      >
        Ir para Configurações
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

export default ContactScreen;
