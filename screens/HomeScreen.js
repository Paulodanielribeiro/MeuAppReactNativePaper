import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Welcome from '../components/Welcome';
import CustomButton from '../components/Button';

const HomeScreen = () => {
  return (
    <View>
      <Text>Tela Inicial</Text>
      <Welcome name="Usuário" />
      <CustomButton label="Clique em mim!" onPress={() => alert('Botão pressionado')} />
    </View>
  );
};

export default HomeScreen;
