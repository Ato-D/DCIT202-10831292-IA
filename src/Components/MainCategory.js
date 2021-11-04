import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

function MainCategory() {

    const [category, setCategory] = useState("EXPLORE")

    const genders = [
        "EXPLORE",
        "MEN",
        "WOMEN",
        "YOUTH",
        "CHILD",
        "INFANT",
        "PRESCHOOL",
        "TODDLER",
        "UNISEX",
    ]

    const renderItem = (item) => (
        <TouchableOpacity 
            style={styles.category}  
            onPress={() => setCategory(item)}
            >
            <Text style={[
                styles.categoryText,
                { color: category === item ? COLORS.black : COLORS.darkgray }
            ]} >
                {`${item} Shoes `}
            </Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container} >
            <Text style={styles.textMain} >
                Athletic Shoes
            </Text>
            <Text style={styles.textMain}>
                Collection
            </Text>
            <FlatList
                data={genders}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ (item, index) => 'key' + index }
                key={ (item, index) => 'key' + index }
                renderItem={ item =>  renderItem(item.item)}
                contentContainerStyle={{ paddingVertical: SIZES.padding* 2 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding * 2,
        // backgroundColor: COLORS.primary 
    },
    textMain: {
        ...FONTS.h1,
        fontWeight: 'bold',
        color: COLORS.black
    },
    category: {
        marginRight: SIZES.padding
    },
    categoryText: {
        ...FONTS.h5,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default MainCategory
