import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import { COLORS, SIZES } from '../constants/theme'
import { ICONS } from '../assets/icon'
import Search from '../screens/Search'
import Favourites from '../screens/Favourites'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: COLORS.primary,
                    // backgroundColor: 'transparent',
                    elevation: 0,
                    borderRadius: SIZES.radius,
                    position: 'absolute',
                    bottom: SIZES.padding,
                    right: SIZES.padding * 2,
                    left: SIZES.padding * 2
                    // marginHorizontal: SIZES.padding * 2,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.iconContainer,  {backgroundColor: focused ?  "#545454" : 'transparent'}
                        ]} >
                            <Image
                                source={ICONS.home}
                                resizeMode="contain"
                                style={[
                                    {
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.white,
                                        opacity: focused ? 1 : 0.5
                                    }
                                ]}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.iconContainer,  {backgroundColor: focused ?  "#545454" : 'transparent'}
                        ]} >
                            <Image
                                source={ICONS.search}
                                resizeMode="contain"
                                style={[
                                    {
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.white,
                                        opacity: focused ? 1 : 0.5
                                    }
                                ]}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.iconContainer,  {backgroundColor: focused ?  "#545454" : 'transparent'}
                        ]} >
                            <Image
                                source={ICONS.heart}
                                resizeMode="contain"
                                style={[
                                    {
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.white,
                                        opacity: focused ? 1 : 0.5
                                    }
                                ]}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.iconContainer,  {backgroundColor: focused ?  "#545454" : 'transparent'}
                        ]} >
                            <Image
                                source={ICONS.basket}
                                resizeMode="contain"
                                style={[
                                    {
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.white,
                                        opacity: focused ? 1 : 0.5
                                    }
                                ]}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.iconContainer,  {backgroundColor: focused ?  "#545454" : 'transparent'}
                        ]} >
                            <Image
                                source={ICONS.person}
                                resizeMode="contain"
                                style={[
                                    {
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.white,
                                        opacity: focused ? 1 : 0.5
                                    }
                                ]}
                            />
                        </View>
                    )
                }}
            />
            {/* <Tab.Screen name="Home" component={Home} /> */}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        padding: 5,
        borderRadius: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Tabs
