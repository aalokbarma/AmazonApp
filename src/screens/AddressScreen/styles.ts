import { StyleSheet } from "react-native";

const Styles=  StyleSheet.create({
    addressFormContainer: {
        padding: 10,
        height: '100%',
        // paddingBottom: 150,
    },
    row: {
        marginVertical: 5
    },
    addressPicker: {
        width: "100%",
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 3,
        borderStyle: 'solid',
        paddingHorizontal: 10,
        // backgroundColor: 'red'
    },
    label: {
        color: '#000',
        fontWeight: '700',
        marginVertical: 5,
    },
    input:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#555',
        borderRadius: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    column:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfRow: {
        width: '48%',
        // marginRight: '2%',
    },
    checkboxView: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    checkboxText: {

    },
    deliveryInstruction: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 2,
        borderColor: '#555',
        borderWidth: 1,
        borderStyle: "solid",
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    deliveryTextContainer: {
        flex: 1,
    },
    deliveryTextMajor: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 3,
    },
    deliveryTextMinor: {

    },
    submitButonContainer: {
        width: '100%',
    },
    submitButton: {
        width :'100%',
        backgroundColor: '#ffbf00',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ffa500',
        paddingVertical: 12,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#853500'
    },
});

export default Styles;