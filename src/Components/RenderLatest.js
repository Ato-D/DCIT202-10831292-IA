import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { results } from '../../constants/dummyData'
import { FONTS, SIZES } from '../../constants/theme';
import LatestCard from './LatestCard';

function RenderLatest({ navigation }) {
    return (
        <View 
            // style={{ paddingBottom: 100 }}
            >
            <View style={styles.head} >
                <Text style={styles.headMain} >
                    Latest Shoes
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Category') } >
                    <Text style={styles.headBtn}>
                        Show all
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => `${item.id}`}
                key={ item => `${item.id}`}
                renderItem={ item => (
                    <LatestCard item={item.item} navigation={navigation} />
                )}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding* 2 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding * 2
    },
    headMain: {
        ...FONTS.h4,
        fontWeight: 'bold'
    },
    headBtn: {
        ...FONTS.body4
    }
})

export default RenderLatest
