import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { handleSignIn, currentAuthenticatedUser } from '../../services/auth';
import CustomPassword from '../../components/custom/CustomPassword'
import CustomButton from '../../components/custom/CustomButton';
import AuthLayout from '../../layouts/AuthLayout';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { error, execute: singIn } = handleSignIn(navigation);

  useEffect(() => {
    currentAuthenticatedUser(navigation).then(({ username }) => {
      if (username) navigation.navigate('Dashboard');
    });
  }, []);

  return (
    <AuthLayout>
      <Text style={{
        fontSize: 28, fontWeight: 'bold', marginBottom: 40
      }}>Sign In</Text>
      <TextInput
        label="Username"
        value={username}
        mode="outlined"
        onChangeText={setUsername}
        style={styles.input}
      />
      <CustomPassword onChangeText={setPassword}/>

      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <CustomButton onPress={() => singIn({ username, password })} text={'Sign In'}/>

      <Text style={{ fontSize: 16, color: '#444444', marginTop: 50 }}>Don't have GOKU account?</Text>
      <CustomButton onPress={() => navigation.navigate('SignUp')}
                    text={'Create new Account'}
                    textStyles={{ color: '#444444' }}
                    buttonStyles={{ backgroundColor: 'white', marginTop: 10 }}
      />

    </AuthLayout>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    width: 350, height: 50, marginBottom: 20, backgroundColor: 'white'
  },
});