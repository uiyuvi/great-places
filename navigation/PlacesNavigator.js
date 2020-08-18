import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesScreen from '../screens/placesScreen';
import PlaceDetailScreen from '../screens/placeDetailScreen';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/newPlaceScreen';
import { COLORS } from '../constants/colors';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

const NavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary
};

const PlacesStack = createStackNavigator();
const PlacesNavigator = () => {
    return (
        <PlacesStack.Navigator screenOptions={NavigationOptions} >
            <PlacesStack.Screen name="Places" component={PlacesScreen} options={({ navigation }) => ({
                headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="cart" iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} onPress={() => {
                        navigation.navigate("NewPlace")
                    }}></Item>
                </HeaderButtons>),
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="cart" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => navigation.toggleDrawer()}></Item>
                </HeaderButtons>)
            })} />
            <PlacesStack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
            <PlacesStack.Screen name="Map" component={MapScreen} />
            <PlacesStack.Screen name="NewPlace" component={NewPlaceScreen} />
        </PlacesStack.Navigator>
    )
}


const Drawer = createDrawerNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: COLORS.primary
                }}
            >
                <Drawer.Screen name="Home" component={PlacesNavigator} options={{
                    drawerLabel: 'Places',
                    drawerIcon: ({ focused }) => (
                        <Ionicons name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} size={23} color={focused ? COLORS.primary : 'black'} />
                    )
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

}

export default MainNavigator;