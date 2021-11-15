import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import RenderCart from '../src/Components/RenderCart';

function Cart({ navigation }) {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.headText}>
                    My Cart
                </Text>
                <View style={styles.checkout} >
                    <View style={styles.totalContainer} >
                        <Text style={styles.total}>
                            Total
                        </Text>
                        <Text style={styles.price} >
                            $620
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.checkoutBtn} >
                        <Text style={styles.checkoutText} >
                            Checkout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <RenderCart navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: SIZES.paddingLarge,
        backgroundColor: COLORS.tetiary
    },
    headText: {
        ...FONTS.h2,
        paddingHorizontal: SIZES.padding * 2,
        fontWeight: 'bold'
    },
    checkout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding * 2,
        paddingVertical: SIZES.padding / 2
    },
    totalContainer: {
        justifyContent: 'space-between'
    },
    total: {
        ...FONTS.body5,
        fontWeight: '800'
    },
    price: {
        ...FONTS.h3,
        fontWeight: 'bold'
    },
    checkoutBtn: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary
    },
    checkoutText: {
        ...FONTS.primary,
    }
})

export default Cart
