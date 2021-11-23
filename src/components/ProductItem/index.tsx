import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface productItemProps{
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number,
    }
}



const ProductItem = (item: productItemProps) => {
    const navigation = useNavigation();
    // console.log(item)

    const onPress = () => {
        navigation.navigate('Products', {id: item.item.id});
    }
    return (
        <View>
            <Pressable onPress = {onPress} style = {Styles.root}>
                <Image style = {Styles.image} source = {{uri: item.item.image}} />

                <View style = {Styles.rightContainer}>
                    <Text style = {Styles.title} numberOfLines = {3}>{item.item.title}</Text>
                    {/* Ratings */}
                    <View style = {Styles.ratingsContainer}>

                        {[0,0,0,0,0].map((el, i) => 
                            <FontAwesome 
                                key = {`${item.item.id} - ${i} `}
                                style = {Styles.star} 
                                name = {i < Math.floor(item.item.avgRating) ? 'star' : 'star-o'} 
                                size= {18} 
                                color = {'#e47911'} 
                            />
                            )}

                        <Text> {item.item.ratings}</Text>
                    </View>
                    <Text style = {Styles.price}>from ${item.item.price}{
                        item.item.oldPrice ? <Text style = {Styles.oldPrice}> ${item.item.oldPrice}</Text>: ''
                    }
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ProductItem;
