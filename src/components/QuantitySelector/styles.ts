import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 120,
        borderRadius: 3,
        padding: 0,
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1',
    },
    buttonText: {
        fontSize: 25,
        fontWeight: '500'
    },
    quantity: {
        width: 50,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        fontSize: 20,
        borderLeftWidth: 1,
        borderLeftColor: '#e3e3e3',
        borderRightWidth: 1,
        borderRightColor: '#e3e3e3',
        color: '#007eb9',
    },
});

export default Styles;