import React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = ({ label, onPress }) => {
  return (
    <Button mode="contained" onPress={onPress}>
      {label}
    </Button>
  );
};

export default CustomButton;
