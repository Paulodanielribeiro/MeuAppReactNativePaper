import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Welcome from '../components/Welcome';


const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Sobre</Text>
      <Welcome name="Visitante" />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')} 
      >
        Ir para a tela inicial
      </Button>
    </View>
  );
};

export default AboutScreen;
