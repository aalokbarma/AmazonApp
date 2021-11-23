import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import AddressScreen from '../screens/AddressScreen';
// import ShoppingCartScreen from '../screens/ShoppingCartScreen';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
    return (
            <Tab.Navigator 
                screenOptions ={{
                    tabBarShowLabel: false,
                    tabBarInactiveTintColor: '#cccccc',
                    tabBarActiveTintColor: '#007eb9'
                    // activeTintColor: '#e47911',
                    // inactiveTintColor: '#ffbd7d',
                }}
            >
                <Tab.Screen 
                    component = {HomeStack} 
                    name = "Home" 
                    options={{
                        tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={24} color={color} />,
                        headerShown: false,
                      }}
                />
                <Tab.Screen 
                    component = {ProductScreen} 
                    name = "Product" 
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />,
                      }}
                />
                <Tab.Screen 
                    component = {ShoppingCartStack} 
                    name = "Shopping Cart" 
                    options={{
                        tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={28} color={color} />,
                        headerShown: false
                      }}
                />
                <Tab.Screen 
                    component = {AddressScreen} 
                    name = "Address" 
                    options={{
                        tabBarIcon: ({ color }) => <Ionicons name="ios-reorder-three-outline" size={40} color={color} />,
                      }}
                />
            </Tab.Navigator>
    )
}

export default BottomTabNav;
