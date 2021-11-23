import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather  from 'react-native-vector-icons/Feather';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import EvilIcons   from 'react-native-vector-icons/EvilIcons';
import DropdownFilters from '../DropdownFilters';
// import { SearchBar } from 'react-native-elements';

const HomeHeader = () => {

    const [search, setSearch] = useState('');

    const updateSearch = (search: String) => {
        setSearch({search});
    }

    const filters = [ "Delivery", "Brand", "Price", "Review", "Sort By"]

    return (
        <View>
            <View style = {Styles.headerTopContainer}>
                {/* <AntDesign name="arrowleft" size={28} color="black" /> */}
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
            <View style = {Styles.deliveryContainer}>
                <View style = {Styles.deliveryView}>
                    <EvilIcons style = {Styles.locationIcon} name="location" size={25} color="black" />
                    <Text style = {Styles.deliverText}>Deliver to Aalok - Rishra 712250</Text>
                </View>
            </View>
            <View style = {Styles.categoryContainer}>
                <ScrollView 
                    style = {Styles.scrollViewHome}
                    horizontal
                >
                    {
                        filters.map((filter) => 
                            <DropdownFilters title = {filter} />
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeHeader;
