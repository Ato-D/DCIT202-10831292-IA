import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import FavouriteCard from '../src/Components/FavouriteCard';
import Header from '../src/Components/Header';
import RenderFavourites from '../src/Components/RenderFavourites';

function Favourites({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <Header /> */}
            {/* View */}
            <Text style={styles.headerText} >
                Favourites
            </Text>
            <RenderFavourites navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tetiary,
        paddingVertical: SIZES.paddingLarge
    },
    headerText: {
        ...FONTS.h2,
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: SIZES.padding ,
        fontWeight: 'bold'
    }
})

export default Favourites
