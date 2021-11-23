import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    root: {

    },
    image: {
        height: 250,
        alignItems: 'center',
        justifyContent: "center",
        resizeMode: 'contain',
        margin: 10,
    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        margin: 5,
        backgroundColor: '#ededed'
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Styles;