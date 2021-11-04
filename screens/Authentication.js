import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import images from '../assets/images/images';
import { BUTTONS, COLORS, FONTS, HEIGHT, SIZES } from '../constants/theme';
import { AuthContext } from '../src/Components/Context';

function Authentication({ route }) {

    const [registration, setRegistration] = useState(true)

    const {signIn, signUp} = useContext(AuthContext)

    const { width, height } = Dimensions.get('screen')

    useEffect(() => {

        const { auth } = route.params

        setRegistration(auth)

    }, [])

    // const handleSignIn = () => {
    //     signIn()
    // }


    return (
        <ImageBackground
            source={images.backgroundImage}
            resizeMode="cover"
            style={[
                StyleSheet.absoluteFillObject,
                { width, height },
                styles.container
            ]}
            blurRadius={2}
        >
            <View style={styles.pageName}  >
                <Text style={styles.pageNameText} >
                    {
                        registration ? 'Sign up' : 'Sign in'
                    }
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputMain}>
                    <Text style={styles.inputText} >
                        E-mail
                    </Text>
                    <TextInput placeholder="Email" style={styles.input} />
                </View>
                <View style={styles.inputMain} >
                    <Text style={styles.inputText} >
                        Password
                    </Text>
                    <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
                </View>
                {
                    registration ? (
                        <View style={styles.inputMain} >
                            <Text style={styles.inputText} >
                                Confirm Password
                            </Text>
                            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
                        </View>
                    ) : null
                }
            </View>
            <View style={styles.btnContainer} >
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => signIn() }
                    >
                    <Text style={styles.btnText}>
                        {
                            registration ? 'Sign Up' : 'Sign In'
                        }
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => setRegistration(!registration)} >
                    <Text style={styles.question}>
                        {
                            registration ? 'Have an Account already ?' : 'Don\'t have an account yet?'
                        }

                    </Text>
                    <Text style={styles.questionBtn} >
                        {
                            registration ? 'Sign in' : 'Sign up'
                        }
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
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
    },
    logo: {
        paddingVertical: SIZES.padding
    },
    logoText: {
        ...FONTS.h1,
        textAlign: 'center',
    },
    pageName: {
        paddingVertical: SIZES.padding
    },
    pageNameText: {
        ...FONTS.h3,
        textAlign: 'center',
    },
    inputMain: {
        paddingVertical: SIZES.padding,
    },
    inputText: {
        ...FONTS.body4,
        color: 'black'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: COLORS.darkgray,
        height: HEIGHT.sm,
        // backgroundColor: 'blue',
        padding: 0,
        paddingBottom: 1,
        ...FONTS.body3,
        fontWeight: 'bold'
    },
    btnContainer: {
        paddingVertical: SIZES.padding,
    },
    btn: {
        ...BUTTONS.primary
    },
    btnText: {
        ...FONTS.primary
    },
    question: {
        ...FONTS.body4,
        color: 'gray'
    },
    questionBtn: {
        ...FONTS.body3,
        color: 'black'
    }
})

export default Authentication
