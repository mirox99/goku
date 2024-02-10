import React from 'react';
import { View, } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const UploadImage = () => {
  const navigation = useNavigation();
  const openImagePicker = async () => {
    try {
      const options = {};
      const result = await launchImageLibrary(options);

      if (result.assets) {

        navigation.navigate('FilterImage', { image: result.assets[0] })
      }
    } catch (e) {
      console.log(e, 'eutytsuyd')
    }
  };

  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ width: 250, height: 200 }}>
      <Button icon="camera" mode="contained"
              style={{ width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
              height={90}
              onPress={() => console.log('Pressed')}>
        Open Camera
      </Button>
      <Button icon="image-multiple"
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 20
              }}
              height={90}
              mode="contained" onPress={openImagePicker}>
        Choose from Gallery
      </Button>
    </View>
  </View>
);
};


export default UploadImage;
