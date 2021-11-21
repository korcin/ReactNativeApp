import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProductScreen = () => {
	return (
		<LinearGradient colors={["#380036", "#0cbaba"]} style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.text}>Strona z produktami</Text>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		padding: 40,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 100,
	},
	text: {
		backgroundColor: "transparent",
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default ProductScreen;
