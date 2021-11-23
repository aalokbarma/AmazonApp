import { StyleSheet } from "react-native";

const Styles  = StyleSheet.create({
page: {
    width: '100%',
    padding: 10,
},
root: {
    // flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
},
image: {
    height: 150,
    flex: 2,
    resizeMode: 'contain',
},
title: {
    fontSize: 18,
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
rightContainer: {
    padding: 10,
    width: '100%',
    flex: 3,
},
ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
},
star: {
    margin: 2,
},
quantitySelectorContainer:{
    marginLeft: 30,
    marginVertical: 10,
    // marginTop: -10,
    width: '100%',
},
row: {
    flexDirection: 'row',
    // padding: 5,
},
});

export default Styles;