import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { ICONS } from '../../assets/icon'
import { SIZES } from '../../constants/theme';
// import images from '../../assets/images/images';
// import { COLORS, FONTS, HEIGHT, SIZES, WIDTH } from '../../constants/theme';

function Header({children, navigation}) {
    return (
        <View style={styles.container} >
            <TouchableOpacity 
                style={styles.iconContainer} 
                onPress={() => navigation.goBack() }
                >
                <Image 
                    source={ICONS.delete}
                    resizeMode="contain"
                    style={styles.icon}
                />
            </TouchableOpacity>
            <View style={styles.midContent} >
                {children}
            </View>
            <View style={styles.iconContainer} >
                <Image 
                    source={ICONS.menu}
                    resizeMode="contain"
                    style={styles.icon}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: SIZES.padding * 2,
        paddingVertical: SIZES.padding * 3,
    },
    icon: {
        width: 25,
        height: 25
    },
    midContent: {
        width: "70%",
        // backgroundColor: 'blue'
    }
})

export default Header
