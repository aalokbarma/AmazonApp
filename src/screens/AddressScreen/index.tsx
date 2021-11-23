import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Styles from './styles';

import countryList from 'country-list';
import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

var countries = countryList.getData();

countries = [{"code": "select", "name": "-- Select --"}, ...countries ]


const AddressScreen = () => {

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')


    const [country, setCountry] = useState({"code": "select", "name": "-- Select --"});

    const onCheckout = () => {
        // if(!fullName || !phoneNumber || !address1 || !city || !state || !zipCode){
        //     console.warn("Please fill the form correctly")
        // }
        if(fullName && phoneNumber && address1 && city && state && zipCode){
            Alert.alert('Address Submitted Successfully')
            setCountry({"code": "select", "name": "-- Select --"})
            setFullName('')
            setPhoneNumber('')
            setAddress1('')
            setAddress1('')
            setCity('')
            setState('')
            setZipCode('')
        }
        else{Alert.alert("Please fill the form correctly")}

    }

    return (
        <ScrollView style = {Styles.addressFormContainer}>
            <View style = {Styles.row}>
                <View style = {Styles.addressPicker}>
                    <Picker
                        //  style = {Styles.addressPicker}
                        selectedValue = {country}
                        onValueChange = {setCountry}
                        >
                        {
                            countries.map(country => (
                                <Picker.Item label = {country.name} value = {country.code} />
                            ))
                        }
                    </Picker>
                </View>
            </View>
            <View style = {Styles.row}>
                <Text style = {Styles.label}>
                    Full name (First and Last name)
                </Text>
                <TextInput 
                    style = {Styles.input}
                    placeholder = "Full Name"
                    keyboardType = 'default'
                    value = {fullName}
                    onChangeText = {setFullName}
                />
            </View>
            <View style = {Styles.row}>
                <Text style = {Styles.label}>
                    Phone Number
                </Text>
                <TextInput 
                    style = {Styles.input}
                    placeholder = "Phone Number"
                    keyboardType = 'numeric'
                    value = {phoneNumber}
                    onChangeText = {setPhoneNumber}
                />
            </View>
            <View style = {Styles.row}>
                <Text style = {Styles.label}>
                    Address
                </Text>
                <TextInput 
                    style = {Styles.input}
                    placeholder = "Street address or P.O. Box"
                    keyboardType = 'default'
                    value = {address1}
                    onChangeText = {setAddress1}
                />
                <TextInput 
                    style = {Styles.input}
                    placeholder = "Apt, Suit, Unit, Building (Optional)"
                    keyboardType = 'default'
                    value = {address2}
                    onChangeText = {setAddress2}
                />
            </View>
            <View style = {Styles.row}>
                <Text style = {Styles.label}>
                    City
                </Text>
                <TextInput 
                    style = {Styles.input}
                    placeholder = "City"
                    keyboardType = 'default'
                    value = {city}
                    onChangeText = {setCity}
                />
            </View>
            <View style = {Styles.column}>
                <View style = {Styles.halfRow}>
                    <Text style = {Styles.label}>
                        State
                    </Text>
                    <TextInput 
                        style = {Styles.input}
                        placeholder = "State"
                        keyboardType = 'default'
                        value = {state}
                        onChangeText = {setState}
                    />
                </View>
                <View style = {Styles.halfRow}>
                    <Text style = {Styles.label}>
                        ZIP Code
                    </Text>
                    <TextInput 
                        style = {Styles.input}
                        placeholder = "ZIP Code"
                        keyboardType = 'numeric'
                        value = {zipCode}
                        onChangeText = {setZipCode}
                    />
                </View>
            </View>
            <View style = {Styles.row}>
                <View style = {Styles.checkboxView}>
                    {/* <CheckBox /> */}
                    <Text style = {Styles.checkboxText}> Make this my default address</Text>
                </View>
            </View>
            <TouchableOpacity style = {Styles.deliveryInstruction}>
                <View style = {Styles.deliveryTextContainer}>
                    <Text style = {Styles.deliveryTextMajor}>Delivery Instructions (optional)</Text>
                    <Text style = {Styles.deliveryTextMinor}>Notes, preferences, access codes and more</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#555" />
            </TouchableOpacity>
            <View style = {Styles.submitButonContainer}>
                <TouchableOpacity style = {Styles.submitButton} onPress = {onCheckout}>
                    <Text style = {Styles.submitButtonText}>Use This Address</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AddressScreen;
