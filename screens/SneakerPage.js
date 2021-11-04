import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView, Pressable } from 'react-native';
import { ICONS } from '../assets/icon';
import { BUTTONS, COLORS, FONTS, HEIGHT, SIZES } from '../constants/theme';
import Header from '../src/Components/Header';
import BottomSheet from 'reanimated-bottom-sheet';

function SneakerPage({ route, navigation }) {
    const { item } = route.params

    const [seeMore, setSeeMore] = useState(false)
    const [numLines, setNumLines] = useState()

    useEffect(() => {

    }, [])

    const sheetRef = useRef(null);

    const sizes = ["7", "7.5", "8", " 8.5", "9", "9.5"]

    const renderContent = useCallback(
        () => (
            <View style={styles.detail} >
                <View style={styles.detailMain} >
                    <Text style={styles.name} >
                        {item.name}
                    </Text>
                    <View style={styles.mainSub} >
                        <Text style={styles.gender} >
                            {`${item.gender}'s Running`}
                        </Text>
                        <Text style={styles.gender}>
                            Rate
                        </Text>
                    </View>
                </View>
                <View style={styles.detailSub} >
                    <Text style={styles.price} >
                        {`$${item.retailPrice}.00`}
                    </Text>
                    <Text style={styles.colors} > Colors </Text>
                </View>
                <ScrollView style={styles.extraDetail} >
                    <View style={styles.sizes} >
                        <Text style={styles.sizesHead} >
                            Select a size
                        </Text>
                        <View style={styles.sizesContainer} >
                            {
                                sizes.map((size, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.sizeBtn} >
                                        <Text style={styles.size} >
                                            {size}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <View style={styles.showMore} >
                            <Text style={styles.silhouette}>
                                {item.silhouette}
                            </Text>
                            <TouchableOpacity
                                onPress={() => setSeeMore(!seeMore)}
                            >
                                <Text style={styles.seeMoreText} >
                                    {
                                        seeMore ? 'See less' : 'See more'
                                    }
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Pressable
                            onPress={() => setSeeMore(true)}>
                            <Text
                                numberOfLines={seeMore ? numLines : 1}
                                onTextLayout={(e) => setNumLines(e.nativeEvent.lines.length)}
                                style={styles.story}
                            > {item.story} </Text>
                        </Pressable>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.addBtn}

                >
                    <Text style={styles.addText} >
                        Add to bag
                    </Text>
                </TouchableOpacity>
            </View>
        ))

    return (
        <>
            <View style={styles.container} >
                <ImageBackground
                    source={{ uri: item.image.original }}
                    resizeMode="contain"
                    style={[
                        styles.image,
                        StyleSheet.absoluteFillObject
                    ]}
                >
                    <Header navigation={navigation}>
                        <Text style={styles.headText}>
                            {`${item.gender} Shoes`}
                        </Text>
                    </Header>
                    <View style={styles.iconContainer} >
                        <Image
                            source={ICONS.heart}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </View>
                </ImageBackground>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={["61%", "60%", "60%"]}
                borderRadius={10}
                initialSnap={0}
                enabledGestureInteraction={false}
                renderContent={renderContent}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tetiary,
        // paddingVertical: SIZES.paddingLarge
    },
    image: {
        width: '100%',
        height: "50%",
        flex: 2,
    },
    headText: {
        ...FONTS.h5,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    iconContainer: {
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding * 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // backgroundColor: 'green'
    },
    icon: {
        width: 25,
        height: 25,
    },
    detail: {
        // flex: 3,
        // height: HEIGHT.h * 0.8,
        height: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: SIZES.padding * 2,
        paddingBottom: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2,
        elevation: 20,
        marginTop: 5,
    },
    detailMain: {
        paddingBottom: SIZES.padding,
    },
    name: {
        ...FONTS.h2,
        fontWeight: 'bold'
    },
    mainSub: {
        flexDirection: 'row'
    },
    gender: {
        ...FONTS.body4,
        textTransform: 'capitalize',
        marginRight: 20,
        color: COLORS.darkgray
    },
    detailSub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: SIZES.padding / 2
    },
    price: {
        ...FONTS.h3,
        fontWeight: '800'
    },
    colors: {
        ...FONTS.body5,
        color: COLORS.darkgray
    },
    sizesHead: {
        ...FONTS.body4,
        marginRight: 20,
        color: COLORS.black,
        fontWeight: 'bold'
    },
    sizesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5
    },
    sizeBtn: {
        borderWidth: 1.5,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: SIZES.padding / 2,
        borderRadius: 50,
    },
    size: {
        ...FONTS.body5,
        textAlign: 'center'
    },
    line: {
        height: 2,
        backgroundColor: COLORS.darkgray,
        marginVertical: SIZES.padding * 1.5
    },
    extraDetail: {
        height: 300
    },
    showMore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    silhouette: {
        ...FONTS.h4,
        fontWeight: 'bold',
    },
    seeMoreText: {
        ...FONTS.body5
    },
    story: {
        ...FONTS.body4,
        color: COLORS.darkgray
    },
    addBtn: {
        ...BUTTONS.primary,
        marginTop: SIZES.padding
    },
    addText: {
        ...FONTS.primary,
        color: COLORS.white,
        // fontWeight: '300',
        // marginVertical: 0
    }

})

export default SneakerPage
