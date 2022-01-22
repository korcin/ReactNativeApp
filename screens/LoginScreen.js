import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "react-native-vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Snackbar } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = ({navigation}) => {

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [visible, setVisible] = React.useState(false);

	const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

	const checkLogin = () => {
		if(login && password && (login === password)){
			storeData().then(() => {
				navigation.navigate('ProfileScreen')
			})
		}else{
			setVisible(true);
		}
	}

	const storeData = async () => {
		try{
			await AsyncStorage.setItem('login', 'true')
		}catch (e){

		}
	}


	return (
		<LinearGradient colors={["#0cbaba", "#380036"]} style={{ flex: 1 }}>
			<View style={styles.container}>
				<Snackbar
					visible = {visible}
					onDismiss = {onDismissSnackBar}
					style={{backgroundColor:'red'}}>
						Twój login lub hasło jest nieprawidłowe
				</Snackbar>
			
				<View style={{padding:24, paddingRight:24}}>
				<MaterialIcons style={styles.icon} name="account-circle" size={90} color='royalblue' />
				<TextInput 
					label="Login"
					value={login}
					onChangeText={setLogin}
					style={styles.input}
					placeholder="Login"
				/>

				<TextInput 
					label="Password"
					value={password}
					onChangeText={setPassword}
					style={styles.input}
					placeholder="Hasło"
					secureTextEntry
				/>

				<Button mode="contained" onPress={() => checkLogin()} style={{backgroundColor:'royalblue', marginTop:15}}>
					Zaloguj
				</Button>	
				</View>
			</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
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
	input: {
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 20,
		color: 'white',
	  },
	icon: {
		textAlign: 'center',
		margin: 25,
		marginBottom: 40,
	},
});

export default LoginScreen;
