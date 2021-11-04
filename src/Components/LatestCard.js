import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ICONS } from '../../assets/icon';
import images from '../../assets/images/images';
import { COLORS, FONTS, HEIGHT, SIZES, WIDTH } from '../../constants/theme';


function LatestCard({ navigation, item }) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => navigation.navigate('Sneaker',{
                item: item
            })}
            >
            <Image
                source={{ uri: item.image.original }}
                resizeMode="cover"
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH.xs,
        height: WIDTH.xs,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
        backgroundColor: 'white' ,
        marginRight: SIZES.padding,
        elevation: 5,
    },
    image: {
        // width: WIDTH.xs,
        // height: WIDTH.xs,
        width: "100%",
        height: "100%"
    }
})

export default LatestCard
