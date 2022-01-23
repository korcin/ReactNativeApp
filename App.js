import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import SplashScreen from "./screens/SplashScreen";
import NavigationScreen from "./screens/NavigationScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CameraScreen from "./screens/CameraScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Splash"
					component={SplashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="NavigationScreen"
					component={NavigationScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
				name="DetailsScreen"
				component={DetailsScreen}
				options={{ headerShown: false }}
				/>
				<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{ headerShown: false }}
				/>
				<Stack.Screen 
				name="CameraScreen"
				component={CameraScreen}
				options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
