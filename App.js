import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HelpScreen from './screens/HelpScreen.js'
import ProductScreen from './screens/ProductScreen.js'

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Strona domowa</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Products" component={ProductScreen} />
    </Drawer.Navigator>
  );
}

export default Navigation