import * as FileSystem from 'expo-file-system';
export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;
        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            })
            dispatch({
                type: ADD_PLACE,
                placeData: {
                    title: title,
                    image: image
                }
            })

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}