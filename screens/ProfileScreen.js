import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Welcome from '../components/Welcome';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  // Informações adicionais
  const bio = "Sou um desenvolvedor apaixonado por tecnologia.";
  const interests = "Interesses: React Native, JavaScript, UI/UX";
  const contact = "Entre em contato: Matogrossodosul@gmail.com";

  return (
    <View>
      <Text>Perfil</Text>
      <Welcome name="Moraes" />

      {/* Informações adicionais */}
      <Text>{bio}</Text>
      <Text>{interests}</Text>
      <Text>{contact}</Text>

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

export default ProfileScreen;
