import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from './styles';
import Products from '../../data/cart';
import CartProductItem from '../../components/CartProductItem';
import HomeHeader from '../../components/HomeHeader';
import CartHeading from '../../components/CartHeading';


const ShoppingCartScreen = () => {

    const totalPrice = Products.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0);
    return (
        <View>
        <CartHeading quantity = {Products.length} totalPrice = {totalPrice} />
        {/* <Text style = {Styles.ResultsText}>Results</Text> */}
        <View style = {Styles.flatlistContainer}>
            <FlatList
            style = {Styles.flatlist}
                data = {Products}
                renderItem = {({item}) => <CartProductItem cartItem = {item} />}
                showsVerticalScrollIndicator = {false}
            />  
        </View>
        
    </View>
    )
}

export default ShoppingCartScreen;
