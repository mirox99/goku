import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', width: '100%', marginTop: 60 }}>
    <Image
      source={require('../assets/goku.png')}
      style={styles.image}
    />
    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>{children}</View>
  </View>)
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 100,
  },
});

export default AuthLayout