import React from 'react';
import UploadImage from './UploadImage';
import FilterImage from './FilterImage';
import { createStackNavigator } from '@react-navigation/stack';

const GalleryView = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        headerLeft: () => null,
        headerShown: false
      }} name="Upload" component={UploadImage} />
      <Stack.Screen name="FilterImage" component={FilterImage} options={{
        gestureEnabled: false,
      }}/>
    </Stack.Navigator>
  );
};


export default GalleryView;
