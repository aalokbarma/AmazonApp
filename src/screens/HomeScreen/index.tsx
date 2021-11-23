import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Styles from './styles';
import ProductItem from '../../components/ProductItem';
import Products from '../../data/products';
import HomeHeader from '../../components/HomeHeader';

const HomeScreen = () => {

    return (
        <View>
            <HomeHeader />
            <Text style = {Styles.ResultsText}>Results</Text>
            <View style = {Styles.flatlistContainer}>
                <FlatList
                    data = {Products}
                    renderItem = {({item}) => <ProductItem item = {item} />}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
            
        </View>
    )
}

export default HomeScreen;
