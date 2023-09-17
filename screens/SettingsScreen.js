import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Welcome from '../components/Welcome';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Configurações</Text>
      <Welcome name="Alice" />
      <Button
        onPress={() => navigation.navigate('Profile')} // Corrigido para "Profile" em vez de "ProfileScreen"
      >
        Ir para o Perfil
      </Button>
    </View>
  );
};

export default SettingsScreen;
