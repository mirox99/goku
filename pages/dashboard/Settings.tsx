import { handleSignOut } from '../../services/auth';
import CustomButton from '../../components/custom/CustomButton';
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  return (<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', width: '100%', marginTop: 60 }}>

      <CustomButton onPress={() => handleSignOut(navigation)} text={'Sign Out'}/>
    </View>
  )
}

export default Settings