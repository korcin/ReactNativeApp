import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = ({navigation}) => {
	return (
		<LinearGradient colors={["#0cbaba", "#380036"]} style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.text}>Twój profil</Text>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
		container: {
		flex: 1,
		justifyContent: "flex-start",
		marginTop: 100,
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

export default ProfileScreen;