import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    filterContainer:{
        flexDirection: 'row',
        height: 25,
        // width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5,
        borderColor: '#555',
        borderWidth: 1,
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    filterText:{
        fontSize: 13,
        color: '#555',
    },
});

export default Styles;