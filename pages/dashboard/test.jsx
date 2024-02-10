import { Image, View } from "react-native";
import { RNCamera } from "react-native-camera";
import React from "@types/react";

<View>
    <RNCamera
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
        }}
    />
</View>

