import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Welcome from '../components/Welcome';

const ProfileScreen = () => {
  return (
    <View>
      <Text>Perfil</Text>
      <Welcome name="John" />
    </View>
  );
};

export default ProfileScreen;
