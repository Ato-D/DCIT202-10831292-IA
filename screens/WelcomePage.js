import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, YellowBox } from 'react-native';
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
                    Shop With Jersey Hunt 
                </Text>
                <Text style={styles.sloganText}>
                     {/*Shop With Jersey Hunt */}
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={styles.btnPrimary} 
                    >
                    <Text style={styles.btnPrimaryText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnSecondary} 
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
        ...FONTS.h4,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'yellow',
    },
    sloganText: {
        ...FONTS.body3,
        fontWeight: "200",
        textAlign: 'center'
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
