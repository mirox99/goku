import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { handleSignUp } from '../../services/auth';
import CustomPassword from '../../components/custom/CustomPassword';
import CustomButton from '../../components/custom/CustomButton';
import AuthLayout from '../../layouts/AuthLayout';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { error, execute: signUp } = handleSignUp(navigation);

  return (
    <AuthLayout>
      <Text style={{
        fontSize: 28, fontWeight: 'bold', marginBottom: 40
      }}>Sign Up</Text>

      <TextInput
        label="Username"
        value={username}
        mode="outlined"
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        onChangeText={setEmail}
        style={styles.input}
      />
      <CustomPassword onChangeText={setPassword}/>
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <CustomButton onPress={() => signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true
        }
      })} text={'Sign Up'}/>
    </AuthLayout>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    width: 350, height: 50, marginBottom: 20, backgroundColor: 'white'
  },
});