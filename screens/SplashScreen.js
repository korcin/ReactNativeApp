import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/core";

const SplashScreen = () => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#fff",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Image
				style={{ width: 395, height: 395 }}
				source={require("../assets/gaming.png")}
			/>
			<TouchableOpacity
				onPress={() => navigation.navigate("NavigationScreen")}
				style={{
					backgroundColor: "#5f0a87",
					padding: 20,
					width: 350,
					borderRadius: 35,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
					Zaczynajmy!
				</Text>
				<MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
			</TouchableOpacity>
		</View>
	);
};

export default SplashScreen;
