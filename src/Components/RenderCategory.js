import React, { useCallback } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { results } from '../../constants/dummyData';
import { SIZES } from '../../constants/theme';
import CategoryCard from './CategoryCard';
import FavouriteCard from './FavouriteCard';

function RenderCategory({ navigation }) {

    const renderItem = useCallback(
        ({ item, index }) => (
            <CategoryCard item={item} index={index} navigation={navigation} />
        ),
        [],
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                keyExtractor={item => `${item.id}`}
                key={item => `${item.id}`}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{ padding: SIZES.padding / 2 }}
            // style={styles.flatList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    flatList: {
        flexWrap: 'wrap',
        // flex: 1,
        backgroundColor: 'blue',
        // flexGrow: 0,
        // height: 100
        // width: 100
    },
    text: {
        width: 100,
        backgroundColor: 'green'
    }
})

export default RenderCategory
