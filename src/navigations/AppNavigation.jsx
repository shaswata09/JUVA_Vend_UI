import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer, DrawerActions} from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const CheckoutStackNavigator = createNativeStackNavigator();
// const MainDrawerNavigator = createDrawerNavigator();

import InfoScreen from '../screens/InfoScreen';
import HomeScreen from '../screens/HomeScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Info"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
