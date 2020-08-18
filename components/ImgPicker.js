import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../constants/colors';
import * as Permissions from 'expo-permissions';

const ImgPicker = props => {
    const [imageUrl, setImageUrl] = useState("");
    const verifyCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
        if (status !== 'granted') {
            Alert.alert(
                "Insufficient permissions",
                'Sorry, we need camera permissions to make this work!',
                [{ 'text': 'ok' }]);
            return false
        }
        return true;
    }
    const imagePickerHandler = async () => {
        let hasPermission = await verifyCameraPermission();

        if (!hasPermission) {
            return;
        }

        let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        console.log(pickerResult);

        setImageUrl(pickerResult.uri);
        props.onImageTaken(pickerResult.uri);
    }
    return (
        <View style={{ ...props.style, ...styles.imagePicker }}>
            <View style={styles.imagePreview}>
                {
                    imageUrl && imageUrl.trim().length > 0 ?
                        <Image style={styles.image} source={{ uri: imageUrl }} /> :
                        <Text>No Image picked yet</Text>
                }

            </View>
            <Button title="Pick a image" onPress={imagePickerHandler} color={COLORS.accent} />
        </View>
    )
}

export default ImgPicker;

const styles = StyleSheet.create({
    imagePicker: {
        justifyContent: 'center'
    },
    imagePreview: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderColor: "#ccc",
        borderWidth: 1
    },
    image: {
        width: "100%",
        height: "100%"
    }
})