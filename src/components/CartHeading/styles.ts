import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    headerTopContainer: {
        paddingTop: 3,
        paddingHorizontal: 5,
        width: '100%',
        height: 60,
        backgroundColor: '#007eb9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchbarContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // width: '95%',
        backgroundColor: '#fff',
        marginHorizontal: '1.5%',
        borderRadius: 10,
        paddingHorizontal: 7,
        borderWidth: 1,
        borderColor: '#555',
        borderStyle: 'solid',
    },
    searchIcon: {
        marginTop: 8,
        marginRight: 4,
    },
    cameraIcon:{
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
    },
    micIcon:{
        marginTop: 8,
        marginRight: 5,
    },
    searchbar: {
        width: '68%',
        fontSize: 16,
    },
    subtotalSection:{
        width: '100%',
        height: 'auto',
        borderStyle: "solid",
        borderBottomColor: '#555',
        borderBottomWidth: 1,
        padding: 15,
    },
    subtotalPriceSection: {
        flexDirection :'row',
        alignItems: 'center',
        
    },
    subtotalText: {
        fontWeight: '400',
        fontSize: 16,
        color: '#000',
    },
    priceText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#e47911',
        marginLeft: 5,
    },
    checkoutButtonContainer: {
        width: '100%',
        height: 'auto',
    },
    checkoutButton: {
        padding: 10,
        backgroundColor: '#fcd12a',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    checkoutText: {
        fontWeight: '600',
        color: '#000',
        fontSize: 18,
    },
    giftRecieptContainer: {
        flexDirection :'row',
        paddingTop: 10,
        paddingLeft: 10,
    },
    checkBox: {
        marginTop: -20,
        padding: 0,
    },
    giftIcon: {

    },
    giftText: {
        fontWeight: "600",
        marginLeft: 5,
    },
});

export default Styles;