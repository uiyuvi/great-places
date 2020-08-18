import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './navigation/PlacesNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}


