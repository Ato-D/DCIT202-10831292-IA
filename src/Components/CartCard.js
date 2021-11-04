import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import images from '../../assets/images/images';
import { COLORS, FONTS, HEIGHT, SIZES, WIDTH } from '../../constants/theme';

function CartCard({ item, navigation }) {

    const [quantity, setQuantity] = useState(1)

    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate('Sneaker', {
                item: item
            })}
        >
            <View style={styles.imageContainer} >
                <Image
                    source={{ uri: item.image.original }}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            <View style={styles.detail} >
                <View style={styles.detailHead}>
                    <Text numberOfLines={1} style={styles.name} >
                        {item.name}
                    </Text>
                    <Text style={styles.category}>
                        {`${item.gender} Shoe`}
                    </Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price} >
                        {`$${item.retailPrice}.00`}
                    </Text>
                </View>
            </View>
            <View style={styles.quantity} >
                <TouchableOpacity
                    style={styles.lessBtn}
                    onPress={() => setQuantity(quantity == 1 ? 1 : quantity - 1)}
                >
                    <Text style={styles.less} >
                        -
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.qty}>
                        {`${quantity}`}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.moreBtn}
                    onPress={() => setQuantity(quantity + 1)}
                >
                    <Text style={styles.more}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: WIDTH.l,
        height: HEIGHT.m,
        marginBottom: SIZES.padding * 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
        justifyContent: 'space-between',
        elevation: 10
    },
    imageContainer: {
        width: WIDTH.xs,
        height: "100%"
    },
    image: {
        width: "100%",
        height: "100%",
    },
    detail: {
        width: "50%",
        justifyContent: 'space-evenly',
    },
    name: {
        ...FONTS.h5,
        fontWeight: 'bold'
    },
    category: {
        ...FONTS.body4,
    },
    price: {
        ...FONTS.body4,
        fontWeight: 'bold'
    },
    quantity: {
        paddingHorizontal: SIZES.padding,
        justifyContent: 'space-evenly'
    },
    lessBtn: {
        width: 25,
        height: 25,
        borderWidth: 0,
        backgroundColor: COLORS.tetiary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius / 2
    },
    less: {
        ...FONTS.h2,
        color: COLORS.darkgray
    },
    moreBtn: {
        width: 25,
        height: 25,
        borderWidth: 0,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius / 2
    },
    qty: {
        ...FONTS.body4,
        textAlign: 'center'
    },
    more: {
        ...FONTS.h4,
        color: COLORS.white
    }
})

export default CartCard
