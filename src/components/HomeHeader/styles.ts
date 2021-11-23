import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    headerTopContainer: {
        paddingTop: 5,
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
        backgroundColor: 'white',
        marginLeft: '1%',
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
    deliveryContainer: {
        width: '100%',
        height: 40,
        backgroundColor: '#48a3c6',
        justifyContent: 'center',
        
    },
    deliveryView:{
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    deliverText:{
        fontSize: 16,
        marginLeft: 8,
    },
    locationIcon:{
        
    },
    categoryContainer: {
        flexDirection: 'row',
        width: 'auto',
        resizeMode: 'contain',
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewHome:{
        // alignItems: 'center',
    },
});

export default Styles;