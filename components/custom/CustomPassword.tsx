import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const CustomPassword = ({ onChangeText }) => {
  const [password, setPassword] = useState('');
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const handleOnChangeText = (value) => {
    setPassword(value)
    onChangeText(value)
  }

  return (<TextInput
    label="Password"
    value={password}
    mode="outlined"
    onChangeText={handleOnChangeText}
    secureTextEntry={isSecureTextEntry}
    style={styles.input}
    right={<TextInput.Icon onPress={() => setIsSecureTextEntry(value => !value)} icon="eye"/>}
  />)
}

const styles = StyleSheet.create({
  input: {
    width: 350, height: 50, marginBottom: 20, backgroundColor: 'white'
  },
});

export default CustomPassword