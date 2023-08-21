import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useTranslations } from '../core/dopebase'
import { HomeScreen } from '../screens'
import Screen2 from '../screens/Screen2';
import Screen from '../screens/Screen';

// const MainStack = createStackNavigator()
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  const { localized } = useTranslations()
  return (
    <Drawer.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackTitle: localized('Back'),
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="Screen" component={Screen} />

    </Drawer.Navigator>
  )
}

export default MainStackNavigator
