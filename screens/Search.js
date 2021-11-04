import React, { useCallback, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ICONS } from '../assets/icon';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import BottomSheet from 'reanimated-bottom-sheet';


function Search() {


    const sheetRef = useRef(null);

    const iphonetypes = [
        "EXPLORE",
        "iPhone 13",
        "iPhone 12",
        "iPhone 11",
        "iPhone X",
        "iPhone SE",
        "iPhone 8",
        "iPhone 7",
        "iPhone 6S PLUS",
        "iPhone 6S",
        "iPhone 6 PLUS",
        "iPhone 6",
        "iPhone 5S",
        "iPhone 5C",
        "iPhone 5",
        "iPhone 4S",
        "iPhone 4",
    ]

    const colors = [
        'red', 'green', 'gold', 'blue', 'black'
    ]

    const brands = [
        'nike', 'adidas', 'puma', 'jordan'
    ]

    // useEffect(() => {
    //     () => sheetRef.current.snapTo(1)
        
    // }, [])

    const renderHeader = useCallback(
        () => (
            <View style={styles.headLine} ></View>
        )
    )

    const renderContent = useCallback(
        () => (
            <View style={styles.filterContainer} >
                <View style={styles.head} >
                    <Text style={styles.filterText} >
                        Filters
                    </Text>
                    <TouchableOpacity 
                        style={styles.doneBtn} 
                        onPress={() => sheetRef?.current.snapTo(2)}
                        >
                        <Text style={styles.done} >
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.subContainer} >
                        <Text style={styles.subHead} >
                            Gender
                        </Text>
                        <View style={styles.subs} >
                            {
                                type.map((type, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.subBtn}
                                    >
                                        <Text style={styles.btnText} >
                                            {gender}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHead} >
                            Color
                        </Text>
                        <View style={styles.subs} >
                            {
                                colors.map((color, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.subBtn}
                                    >
                                        <Text style={styles.btnText} >
                                            {color}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View>
                        <Text>
                            Price
                        </Text>
                        <View>
                            <View></View>
                        </View>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHead} >
                            Brands
                        </Text>
                        <View style={styles.subs} >
                            {
                                brands.map((brand, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.subBtn}
                                    >
                                        <Text style={styles.btnText} >
                                            {brand}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        ))

    return (
        <>
            <View style={styles.container} >
                <View>
                    <Text style={styles.headText} >
                        Search
                    </Text>
                </View>
                <View style={styles.searchBar} >
                    <TextInput placeholder="Search" style={styles.input} />
                    <View style={styles.searchIcons} >
                        <TouchableOpacity>
                            <Image
                                source={ICONS.search}
                                resizeMode="contain"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => sheetRef?.current.snapTo(0)}
                        >
                            <Image
                                source={ICONS.filter}
                                resizeMode="contain"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.main} >
                    <Text style={styles.mainText} >
                        Search for your favourite iPhone
                    </Text>
                </View>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={["80%", "80%", "0%"]}
                borderRadius={10}
                enabledContentGestureInteraction={false}
                initialSnap={2}
                renderContent={renderContent}
                renderHeader={renderHeader}
            />
        </>
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
    searchBar: {
        paddingHorizontal: SIZES.padding * 2,
        paddingVertical: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: "70%",
        borderWidth: 2,
        borderRadius: SIZES.radius,
        padding: SIZES.padding / 3
    },
    searchIcons: {
        width: "25%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25
    },
    main: {
        flexDirection: 'column',
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        ...FONTS.body3,
        textAlign: 'center'
    },
    filterContainer: {
        backgroundColor: 'white',
        paddingHorizontal: SIZES.padding * 2,
        paddingVertical: SIZES.padding,
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingBottom: 50
    },
    headLine: {
        width: 60,
        height: 3,
        backgroundColor: COLORS.darkgray,
        borderRadius: 3,
        marginVertical: 10,
        alignSelf: 'center',
    },
    head: {
        flexDirection: 'row',
        paddingVertical: SIZES.padding ,
        paddingHorizontal: SIZES.padding / 2 ,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filterText: {
        ...FONTS.h1,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    doneBtn: {
        width: 80,
        height: 40,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
        borderColor: COLORS.darkgray
    },
    subContainer: {
        justifyContent: 'space-between'
    },
    subHead: {
        ...FONTS.body3,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subs: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        paddingVertical: SIZES.padding
    },
    subBtn: {
        width: 100,
        height: 50,
        borderWidth: 1.5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
        borderColor: COLORS.darkgray
    },
    btnText: {
        ...FONTS.body4,
        textTransform: 'capitalize'
    }
})

export default Search
