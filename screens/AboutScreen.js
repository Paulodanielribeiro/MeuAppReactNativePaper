import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Welcome from '../components/Welcome';

const AboutScreen = () => {
  return (
    <View>
      <Text>Sobre</Text>
      <Welcome name="Visitante" />
    </View>
  );
};

export default AboutScreen;
