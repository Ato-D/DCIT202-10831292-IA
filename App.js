import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/WelcomePage';
import Authentication from './screens/Authentication';
import Home from './screens/Home';
import Context, { AuthContext } from './src/Components/Context';
import Tabs from './navigation/Tabs';
import CategoryPage from './screens/CategoryPage';
import SneakerPage from './screens/SneakerPage';



const Stack = createStackNavigator()
export default function App() {

  const [isSignedIn, setIsSignedIn] = useState(false)

  const authContext = useMemo(() => ({
    signIn: () => setIsSignedIn(true),
    signUp: () => setIsSignedIn(true),
    logOut: () => setIsSignedIn(false)
  }))

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext} >
        <Context>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            {
              isSignedIn == true ? (
                <>
                  <Stack.Screen name="Home" component={Tabs} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Welcome" component={Welcome} />
                  <Stack.Screen name="Auth" component={Authentication} />
                </>
              )
            }
          </Stack.Navigator>
        </Context>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
