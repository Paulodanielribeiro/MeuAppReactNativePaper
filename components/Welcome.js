import React from 'react';
import { View, Text } from 'react-native';

const Welcome = ({ name }) => {
  return (
    <View>
      <Text>Bem-vindo ao aplicativo, {name}!</Text>
    </View>
  );
};

export default Welcome;
