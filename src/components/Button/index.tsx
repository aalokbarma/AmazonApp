import React from 'react';
import { Pressable, Text } from 'react-native';
import Styles from './styles';

interface buttonTypes {
    text: string,
    onPress: () => void,
    containerStyles? : object,
}

const Button = ({text, onPress, containerStyles}: buttonTypes) => {
    return (
        <Pressable style = {{...Styles.root, ...containerStyles}} onPress = {onPress}>
            <Text style = {Styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Button;
