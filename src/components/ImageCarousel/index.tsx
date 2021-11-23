import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Image, useWindowDimensions } from 'react-native';
import Styles from './styles';

const ImageCarousel = ({Images}: {Images: [string]}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;

    const onFlatListUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
        console.log(viewableItems)
    }, [])


    return (
        <View style = {Styles.root}>
            <FlatList
            data = {Images}
            renderItem = {({item}) => <Image style = {[Styles.image, { width: windowWidth - 40 }]} source = {{uri: item}} />}
            horizontal
            showsHorizontalScrollIndicator = {false}
            snapToInterval = {windowWidth - 20}
            snapToAlignment = {'center'}
            decelerationRate = {'fast'}
            viewabilityConfig = {{
                viewAreaCoveragePercentThreshold: 50,
                minimumViewTime: 300,
            }}
            onViewableItemsChanged = {onFlatListUpdate}
            />
            <View style = {Styles.dots}>
                {Images.map((image, index) => (
                    <View 
                        style = {[Styles.dot,
                            {
                                backgroundColor: index === activeIndex ? '#ededed' : '#555'
                            }
                        ]} 
                    />
                ))}
            </View>
        </View>
    )
}

export default ImageCarousel;
