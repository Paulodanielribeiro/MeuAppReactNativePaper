import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Welcome from '../components/Welcome';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  // Informações adicionais
  const aboutApp = "Este é o aplicativo de configurações.";
  const version = "Versão 1.0";
  const developer = "Desenvolvido por: paulo";

  return (
    <View>
      <Text>Configurações</Text>
      <Welcome name="Ribeiro" />

      {/* Informações adicionais */}
      <Text>{aboutApp}</Text>
      <Text>{version}</Text>
      <Text>{developer}</Text>

      <Button
        onPress={() => navigation.navigate('Profile')} 
      >
        Ir para o Perfil
      </Button>

      {/* Botão para voltar */}
      <Button
        onPress={() => navigation.goBack()} 
      >
        Voltar
      </Button>
    </View>
  );
};

export default SettingsScreen;
