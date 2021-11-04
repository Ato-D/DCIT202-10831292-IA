import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground } from 'react-native';
import { ICONS } from '../../assets/icon';
import images from '../../assets/images/images';
import { results } from '../../constants/dummyData';
import { COLORS, FONTS, SIZES, WIDTH } from '../../constants/theme';

function CategoryCard({ item, index, navigation }) {

    // console.log(index % 2)

    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    // height: (index % 2) == 0 ? 200 : 300 ,
                    // position: (index > 2 && (index % 2) == 0) ? 'absolute' : null ,
                    // top: -20,
                }
            ]}
            onPress={() => navigation.navigate('Sneaker', {
                item: item
            })}
        >
            <ImageBackground
                source={{uri : item.image.thumbnail }}
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
                <Text numberOfLines={2} style={styles.name}>
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
        width: WIDTH.sm,
        height: 250,
        backgroundColor: COLORS.white,
        margin: SIZES.padding / 2,
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
        justifyContent: 'space-evenly',
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding
    },
    name: {
        ...FONTS.h3,
        textAlign: 'left'
    },
    price: {
        ...FONTS.body3,
        textAlign: 'left'
    }
})

export default CategoryCard
