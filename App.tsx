/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Box, Button, NativeBaseProvider, View, VStack } from "native-base";
import React, { useState } from "react";
import { useStorage } from "./src/storage";
import { NavigationContainer } from "@react-navigation/native";
import {SWRConfig} from 'swr'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppState, AppStateStatus } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isOnline() {
          /* Customize the network state detector */
          return true
        },
        isVisible() {
          /* Customize the visibility state detector */
          return true
        },
        initFocus(callback) {
          let appState = AppState.currentState

          const onAppStateChange = (nextAppState: AppStateStatus) => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              appState.match(/inactive|background/) &&
              nextAppState === 'active'
            ) {
              callback()
            }
            appState = nextAppState
          }

          // Subscribe to the app state change events
          const subscription = AppState.addEventListener(
            'change',
            onAppStateChange,
          )

          return () => {
            subscription.remove()
          }
        },
        initReconnect() {
          /* Register the listener with your state provider */
        },
      }}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName = 'home'

                if (route.name === 'PokéDex') {
                  iconName = 'grass'
                } else if (route.name === 'Favorites') {
                  iconName = 'favorite'
                }

                return <Icon name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="PokéDex" component={() => <Box>PokeDex</Box>} />
            <Tab.Screen name="Favorites" component={() => <Box>Favorited</Box>} />
          </Tab.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </SWRConfig>
  )
}

export default App
