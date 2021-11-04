import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { results } from '../../constants/dummyData'
import { SIZES } from '../../constants/theme';
import ExploreCard from './ExploreCard';


function RenderExplore({ navigation }) {
    return (
        <View>
            <FlatList 
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => `${item.id}`}
                key={ item => `${item.id}`}
                renderItem={ item => (
                    <ExploreCard item={item.item} navigation={navigation} />
                )}
                contentContainerStyle={{ padding: SIZES.padding* 2 }}
            />
        </View>
    )
}

export default RenderExplore
