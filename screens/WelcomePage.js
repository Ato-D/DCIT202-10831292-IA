import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, YellowBox } from 'react-native';
import { color } from 'react-native-reanimated';
import images from '../assets/images/images';
import { BUTTONS, COLORS, FONTS, HEIGHT, SIZES } from '../constants/theme';

function WelcomePage({ navigation }) {


    const { width, height } = Dimensions.get('screen') 

    return (
        <ImageBackground
            source={images.backgroundImage}
            resizeMode="cover"
            style={[
                StyleSheet.absoluteFillObject,
                { width, height },
                styles.container
            ]}
            // blurRadius={2}
        >
            <View style={styles.welcome} >
                <Text style={styles.welcomeText}>
                    JERSEY HUNT 
                </Text>
                <Text style={styles.sloganText}>
                     Shop With Jersey Hunt 
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={styles.btnPrimary} 
                    onPress={() => navigation.navigate('Auth',{
                        auth: true
                    })}
                    >
                    <Text style={styles.btnPrimaryText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnSecondary} 
                    onPress={() => navigation.navigate('Auth', {
                        auth: false
                    })}
                    >
                    <Text style={styles.btnSecondaryText} >
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding * 2,
        justifyContent: 'space-around'
    },
    welcomeText: {
        ...FONTS.h1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'yellow',
    },
    sloganText: {
        ...FONTS.H2,
        fontWeight: "200",
        textAlign: 'center',
        color: 'white',
    },
    btnContainer: {

    },
    btnPrimary: {
        ...BUTTONS.primary, 
        
    },
    btnSecondary: {
        ...BUTTONS.secondary,
        
    },
    btnPrimaryText: {
        ...FONTS.primary,
    },
    btnSecondaryText: {
        ...FONTS.secondary,
    }
    
})

export default WelcomePage
