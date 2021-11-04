import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ICONS } from '../../assets/icon';
import images from '../../assets/images/images';
import { COLORS, FONTS, HEIGHT, SIZES, WIDTH } from '../../constants/theme';

function FavouriteCard({ item, navigation }) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Sneaker',{
                item: item
            }) }
            >
            <ImageBackground
                source={{ uri: item.image.original }}
                resizeMode="contain"
                style={styles.imageContainer}
            >
                <View style={styles.iconContainer}>
                    <Image
                        source={ICONS.heart}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                </View>
            </ImageBackground>
            <View style={styles.detail} >
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.price}>
                    {`$${item.retailPrice}.00`}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH.l,
        height: HEIGHT.l,
        backgroundColor: COLORS.white,
        marginBottom: SIZES.padding * 2,
        elevation: 15,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 2,
        width: "100%",
        height: "100%"
    },
    iconContainer: {
        padding: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        height: 25,
        width: 25
    },
    detail: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    name: {
        ...FONTS.h3,
        textAlign: 'center'
    },
    price: {
        ...FONTS.body3,
        textAlign: 'center'
    }
})

export default FavouriteCard
