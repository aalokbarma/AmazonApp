import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from './styles';

interface quantiitySelectorTypes {
    quantity: number,
    setQuantity?: number,
}

const QuantitySelector = ({quantity, setQuantity}: quantiitySelectorTypes) => {

    // const [quantity, setQuantity] = useState(0)

    const onMinus = () => {
        {quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)}
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }
    return (
        <View style = {Styles.root}>
            <Pressable style = {Styles.button} onPress = {onMinus}>
                <Text style = {Styles.buttonText}>-</Text>
            </Pressable>
                <Text style = {Styles.quantity}>{quantity}</Text>
            <Pressable style = {Styles.button} onPress = {onPlus}>
                <Text style = {Styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

export default QuantitySelector;
