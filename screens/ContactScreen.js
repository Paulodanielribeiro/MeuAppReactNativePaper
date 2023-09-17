import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Welcome from '../components/Welcome';

const ContactScreen = () => {
  return (
    <View>
      <Text>Contato</Text>
      <Welcome name="Emily" />
    </View>
  );
};

export default ContactScreen;
