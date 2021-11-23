import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface filtersTypes {
    title: string
}

const DropdownFilters = ({title} : filtersTypes) => {
    return (
        <View style = {Styles.filterContainer}>
            <Text style = {Styles.filterText}>{title}</Text>
            <MaterialIcons name="arrow-drop-down" size={20} color="#555" />
        </View>
    )
}

export default DropdownFilters
