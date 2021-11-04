import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ICONS } from '../../assets/icon';
import images from '../../assets/images/images';
import { COLORS, FONTS, HEIGHT, SIZES, WIDTH } from '../../constants/theme';

function ExploreCard({ item, navigation }) {

    // console.log(item.image)

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
                <View style={styles.iconContainer} >
                    <Image
                        source={ICONS.heart}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                </View>
            </ImageBackground>
            <View style={styles.detail} >
                <View>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                    <Text style={styles.category} >
                        {`${item.gender} Shoe`}
                    </Text>
                </View>
                <View style={styles.priceColors} >
                    <View>
                        <Text style={styles.price}>
                            {`$${item.retailPrice}.00`}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.color}>
                            Colors
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH.m,
        height: HEIGHT.xl,
        backgroundColor: COLORS.white,
        marginRight: SIZES.padding * 2,
        elevation: 15,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 5,
        height: "100%",
        width: "100%"
    },
    iconContainer: {
        padding: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    icon: {
        height: 25,
        width: 25
    },
    detail: {
        flex: 3,
        padding: SIZES.padding ,
        justifyContent: 'space-between'
    },
    name: {
        ...FONTS.h3,
        // fontWeight: 'bold'
    },
    category: {
        ...FONTS.body5,
        color: COLORS.darkgray,
        textTransform: 'capitalize'
    },
    priceColors: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        ...FONTS.body2,
        // fontWeight: 'bold'
    },
    color: {
        ...FONTS.body5,
        color: COLORS.darkgray
    }
    
})

export default ExploreCard
