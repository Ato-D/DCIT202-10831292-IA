import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import axios from "axios";
import { GenderContext } from '../src/Components/Context';
import MainCategory from '../src/Components/MainCategory';
import { results } from '../constants/dummyData';
import RenderExplore from '../src/Components/RenderExplore';
import RenderLatest from '../src/Components/RenderLatest';


function Home({ navigation }) {
    

    return (
        <ScrollView style={styles.container} >
            <MainCategory />
            <RenderExplore navigation={navigation} />
            <RenderLatest navigation={navigation} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: SIZES.paddingLarge,
        backgroundColor: COLORS.tetiary,
        // paddingBottom: SIZES.padding * 10
    }
})

export default Home
