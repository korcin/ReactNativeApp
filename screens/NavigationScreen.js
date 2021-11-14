import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HelpScreen from './HelpScreen.js'
import ProductScreen from './ProductScreen.js'

function Start() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Strona domowa</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Strona domowa" component={Start} />
      <Drawer.Screen name="Produkty" component={ProductScreen} />
      <Drawer.Screen name="Pomoc" component={HelpScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen