import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Welcome from '../components/Welcome';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Configurações</Text>
      <Welcome name="Alice" />
    </View>
  );
};

export default SettingsScreen;
