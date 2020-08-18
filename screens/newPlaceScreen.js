import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Button } from "react-native";
import { COLORS } from '../constants/colors';
import { useDispatch } from 'react-redux';
import { addPlace } from '../redux/actions/placesAction';
import ImgPicker from '../components/ImgPicker';

const NewPlaceScreen = (props) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    const savePlaceHandler = () => {
        dispatch(addPlace(title, image));
        props.navigation.goBack();
    };
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} value={title} onChangeText={text => setTitle(text)} />
                <ImgPicker style={styles.imagePicker} onImageTaken={(image)=>setImage(image)}/>
                <Button title="save place" onPress={savePlaceHandler} color={COLORS.primary} />
            </View>
        </ScrollView>
    )
}

export default NewPlaceScreen;

const styles = StyleSheet.create({
    form: {
        padding: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    imagePicker: {
        marginBottom: 15
    }
})