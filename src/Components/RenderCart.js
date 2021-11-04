import React, { useCallback } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { results } from '../../constants/dummyData';
import { COLORS, HEIGHT, SIZES, WIDTH } from '../../constants/theme';
import CartCard from './CartCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ICONS } from '../../assets/icon';

function RenderCart({ navigation }) {

    const renderItem = useCallback(
        ({item}) => (
            <CartCard item={item} navigation={navigation} />
        )
    )

    const renderHiddenItem = useCallback(
        () => (
            <TouchableOpacity style={styles.deleteCard} >
                <Image 
                    source={ICONS.trash}
                    resizeMode="contain"
                    style={styles.icon}
                />
            </TouchableOpacity>
        )
    )

    return (
        <View>
            <SwipeListView 
                data={results}
                keyExtractor={ item => `${item.id}`}
                key={ item => `${item.id}`}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-50}
                contentContainerStyle={{ padding: SIZES.padding* 2  }}
                style={styles.flatList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    deleteCard: {
        flexDirection: 'row',
        width: WIDTH.l,
        height: HEIGHT.m,
        marginBottom: SIZES.padding * 2,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding
        // elevation: 10
    },
    icon: {
        width: 25,
        height: 30,
        tintColor: 'red'
    },
    flatList: {
        marginBottom: 30
    }
})

export default RenderCart
