import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather  from 'react-native-vector-icons/Feather';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import {useNavigation} from '@react-navigation/native';
// import EvilIcons   from 'react-native-vector-icons/EvilIcons';
// import DropdownFilters from '../DropdownFilters';

interface cartHeadingProps{
    quantity: number,
    totalPrice?: number,
}

const CartHeading = ({quantity, totalPrice}: cartHeadingProps) => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');

    const updateSearch = (search?: String) => {
        setSearch(search);
    }

    const onCheckout = () => {
        navigation.navigate('Address');
    }

    return (
        <View>
            <View style = {Styles.headerTopContainer}>
                <View style = {Styles.searchbarContainer}>
                    <Feather style = {Styles.searchIcon} name="search" size={23} color="black" />
                    <TextInput
                        style={Styles.searchbar}
                        onChangeText={updateSearch}
                        value={search}
                        placeholder="Search a product..."
                        placeholderTextColor= '#999'
                    />
                    <Feather style = {Styles.cameraIcon} name="camera" size={25} color="#555" />
                    <Ionicons style = {Styles.micIcon} name="mic-outline" size={25} color="#555" />
                </View>
            </View>
            <View style = {Styles.subtotalSection}>
                <View style = {Styles.subtotalPriceSection}>
                    <Text style = {Styles.subtotalText}>Subtotal ({quantity} items):</Text>
                    <Text style = {Styles.priceText}>${totalPrice}</Text>
                </View>
                <View style = {Styles.checkoutButtonContainer}>
                    <TouchableOpacity style = {Styles.checkoutButton} onPress = {onCheckout}>
                        <Text style = {Styles.checkoutText}>Proceed to Checkout</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        </View>
    )
}

export default CartHeading;
