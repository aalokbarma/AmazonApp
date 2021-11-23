import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import AddressScreen from '../screens/AddressScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNav from './bottomTabNav';

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen component = {HomeScreen} name = "Home" options = {{headerShown: false,}} />
                <Stack.Screen component = {ProductScreen} name = "Products"/>
            </Stack.Navigator>
    )
}

export default HomeStack;
