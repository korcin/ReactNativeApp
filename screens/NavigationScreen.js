import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import product from "../screens/const/product.js";

import LoginScreen from "./LoginScreen.js";
import ProductScreen from "./ProductScreen.js";

const Tab = createBottomTabNavigator();

function Start() {
	return (
		<LinearGradient colors={["#380036", "#0cbaba"]} style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Text style={styles.text}>
					Witaj na stronie głównej! Wybierz kategorię sprzętów, która cię
					interesują.
				</Text>

				<View style={styles.container}>
				<TouchableOpacity 
				style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={styles.img}
						source={require("../assets/console1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={styles.txtimg}
				>
					Konsole
				</Text>
				<TouchableOpacity style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={styles.img}
						source={require("../assets/computer1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={styles.txtimg}
				>
					Komputery
				</Text>
				<TouchableOpacity style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={styles.img}
						source={require("../assets/smartphone1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={styles.txtimg}
				>
					Telefony
				</Text>
				<TouchableOpacity style={{ position: "relative", marginTop: 20 }}>
					<Image
						style={styles.img}
						source={require("../assets/television1.png")}
					/>
				</TouchableOpacity>
				<Text
					style={styles.txtimg}
				>
					Telewizory
				</Text>
			</View>
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
			<Drawer.Screen name="Zaloguj się" component={LoginScreen} />
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
	img:{
		backgroundColor: "#fff",
		width: 150,
		height: 150,
		borderRadius: 15,
	},
	txtimg:{
		color: "#fff",
		fontSize: 20,
		textAlign: "center",
	}
});

export default NavigationScreen;
// style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
