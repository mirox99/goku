import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, text, textStyles, buttonStyles }) => {

  return (<TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyles]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 350,
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 3 },
    elevation: 3,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton