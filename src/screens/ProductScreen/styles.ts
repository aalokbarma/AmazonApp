import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        color: '#333',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    description: {
        marginVertical: 10,
        lineHeight: 20,
    },
});

export default Styles;