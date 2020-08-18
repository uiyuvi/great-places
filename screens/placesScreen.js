import React from 'react';
import { View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlacesScreen = (props) => {
    const places = useSelector(state => state.places.places)
    return (
        <View>
            <FlatList
                data={places}
                renderItem={itemData => <PlaceItem
                    onSelect={() => {
                        props.navigation.navigate("PlaceDetail", {
                            title: itemData.item.title,
                            id: itemData.item.id
                        })
                    }}
                    image={null}
                    title={itemData.item.title}
                    address={null} />}
            />
        </View>
    )
}

export default PlacesScreen;