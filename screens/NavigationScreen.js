import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HelpScreen from "./HelpScreen.js";
import ProductScreen from "./ProductScreen.js";

// const Tab = createBottomTabNavigator();

function Start() {
	return (
		<LinearGradient colors={["#380036", "#0cbaba"]} style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Text style={styles.text}>
					Witaj na stronie głównej! Wybierz kategorię sprzętów, które cię
					interesują.
				</Text>

				<TouchableOpacity style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={{
							backgroundColor: "#fff",
							width: 150,
							height: 150,
							borderRadius: 15,
							left: 125,
						}}
						source={require("../assets/console1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={{
						position: "relative",
						color: "#fff",
						fontSize: 20,
						left: 160,
					}}
				>
					Konsole
				</Text>
				<TouchableOpacity style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={{
							backgroundColor: "#fff",
							width: 150,
							height: 150,
							borderRadius: 15,
							left: 125,
						}}
						source={require("../assets/computer1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={{
						position: "relative",
						color: "#fff",
						fontSize: 20,
						left: 160,
					}}
				>
					Komputery
				</Text>
				<TouchableOpacity style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={{
							backgroundColor: "#fff",
							width: 150,
							height: 150,
							borderRadius: 15,
							left: 125,
						}}
						source={require("../assets/smartphone1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={{
						position: "relative",
						color: "#fff",
						fontSize: 20,
						left: 160,
					}}
				>
					Telefony
				</Text>
				<TouchableOpacity style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={{
							backgroundColor: "#fff",
							width: 150,
							height: 150,
							borderRadius: 15,
							left: 125,
						}}
						source={require("../assets/television1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={{
						position: "relative",
						color: "#fff",
						fontSize: 20,
						left: 160,
					}}
				>
					Telewizory
				</Text>
				{/* <Tab.Navigator>
				<Tab.Screen
					name="Pomoc"
					component={HelpScreen}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Produkty"
					component={ProductScreen}
					options={{ headerShown: false }}
				/>
			</Tab.Navigator> */}
			</ScrollView>
		</LinearGradient>
	);
}

const Drawer = createDrawerNavigator();

const NavigationScreen = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Strona domowa" component={Start} />
			<Drawer.Screen name="Produkty" component={ProductScreen} />
			<Drawer.Screen name="Pomoc" component={HelpScreen} />
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 100,
	},
	text: {
		position: "relative",
		backgroundColor: "transparent",
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default NavigationScreen;
// style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
