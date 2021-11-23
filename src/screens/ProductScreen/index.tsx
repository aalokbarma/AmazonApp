import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

import {useRoute} from '@react-navigation/native';

interface productScreenProps{
    id: string
}

const ProductScreen = ({id}: productScreenProps) => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    // console.log(route.params)
    // console.log(product.images)
    return (
        <ScrollView style = {Styles.root}>
            <Text style = {Styles.title}>{product.title}</Text>

            {/* Image Carousel */}

            <ImageCarousel Images = {product.images} />

            {/* Option Selector */}

            <Picker
            selectedValue = {selectedOption}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedOption(itemValue)
              }
            >
                {
                    product.options.map(option => (
                        <Picker.Item label = {option} value = {option} />
                        ))
                    }
                {/* <Picker.Item label = 'Barma' value = 'Barma' /> */}
            </Picker>

            <Text style = {Styles.price}>from ${product.price}{
                product.oldPrice ? <Text style = {Styles.oldPrice}> ${product.oldPrice}</Text>: ''
            }
            </Text>

            {/* Description */}

            <Text style = {Styles.description}>
                {product.description}
            </Text>

            {/* Quantity Selector */}
            <QuantitySelector quantity = {quantity} setQuantity = {setQuantity} />

            {/* Button */}
            <Button 
                text = {'Add To Cart'} 
                onPress = {() => {console.warn('Add To Cart')}}
                containerStyles = {{
                    backgroundColor: '#e3c985'
                }}
            />
            <Button 
                text = {'Buy Now'} 
                onPress = {() => {console.warn('Buy Now')}}
            />
        </ScrollView>
    )
}

export default ProductScreen;
