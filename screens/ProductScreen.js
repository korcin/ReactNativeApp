import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "react-native-vector-icons";
import product from "../screens/const/product.js";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Searchbar } from 'react-native-paper';

const width = Dimensions.get("screen").width/2-30;

const ProductScreen = ({navigation}) => {

	const categories = ['WSZYSTKO', 'KONSOLE', 'KOMPUTERY', 'TELEFONY', 'TELEWIZORY'];

	const [categoryIndex,setCategoryIndex] = React.useState(0);

	const CategoryList = () => {
		return ( 
		<View style={styles.categoryContainer}>
			{categories.map((item,index)=>(
			<TouchableOpacity key={index}
			activeOpacity={0.8} 
			onPress={()=>setCategoryIndex(index)}>
				<Text style={[styles.categoryText,categoryIndex === index && styles.categoryTextSelected,]}>
					{item}
				</Text>
			</TouchableOpacity>
			))}
		</View>
		);
	};

	const Card = ({product}) => {
		return (
		<SafeAreaView style={{
			flex: 1,
			marginLeft:12,
			justifyContent:'center',
		  }}>
		<TouchableOpacity onPress={() => navigation.navigate("DetailsScreen",product)}>
		<View style={styles.card}>
			<View style={{alignItems:'flex-end', margin:10}}>
				<View style={{
					width:30,
					height:30,
					borderRadius:15,
					alignItems:'center',
					justifyContent:'center',
					backgroundColor: product.like
					? 'rgba(245, 42, 42, 0.2)'
					: 'rgba(0, 0, 0, 0.2)',}}>
					<MaterialIcons name="favorite" size={18} color={product.like ? 'rgb(245, 42, 42)' : 'rgb(0, 0, 0)'}/>
				</View>
				
			</View>
				<View style={{height:100,alignItems:'center'}}>
					<Image style={{resizeMode:'contain', flex:1}}
					source={product.img} />
				</View>
				<Text style={{fontWeight:'bold',fontSize:15,marginTop:10,marginLeft:3}}>
					{product.name}
				</Text>
				<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginLeft:3}}>
					<Text style={{fontSize:19, fontWeight:'bold'}}>{product.price} zł</Text>
					<View style={{height:25,width:25, backgroundColor:'green', justifyContent:'center',alignItems:'center',borderRadius:5}}>
						<Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>+</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
		</SafeAreaView>
		);
	}

	return (
		<LinearGradient colors={["#380036", "#0cbaba"]} style={{ flex: 1 }}>
			<View>
				<Text style={styles.text}>Strona z produktami</Text>
			</View>
			<View style={styles.container}>

				<View style={styles.searchContainer}>
					<Searchbar placeholder="Szukaj"/>
				</View>

				<View style={styles.sortBtn}>
					<MaterialIcons name="sort" size={30} color={'white'} />
				</View>
			</View>
			<CategoryList />
			<FlatList 
			showsHorizontalScrollIndicator={false}
			numColumns={2} 
			data={product} 
			renderItem={({item}) => <Card product={item} />}
			columnWrapperStyle={{justifyContent:'space-between'}}
			/>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop:30,
		flexDirection:'row',
	},
	searchContainer: {
		flex:1,
	},
	sortBtn:{
		marginLeft:10,
		height:50,
		width:50,
		backgroundColor: 'green',
		borderRadius:10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		marginTop:20,
		marginBottom:10,
		backgroundColor: "transparent",
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
		textAlign: "center",
	},
	categoryText:{
		fontSize:14,
		fontWeight: 'bold',
		color: 'white',
	},
	categoryTextSelected:{
		color:'green',
		paddingBottom:5,
		borderBottomWidth:2,
		borderColor:'green',
	},
	input:{
		fontSize:18,
		fontWeight:'bold',
		color: 'black',
		flex: 1,
	},
	categoryContainer:{
		flexDirection: 'row',
		marginTop:30,
		marginBottom:20,
		justifyContent: 'space-between',
	},
	card:{
		height:225,
		backgroundColor: 'white',
		width,
		marginHorizontal:2,
		borderRadius: 10,
		marginBottom:20,
		flex: 1,
	}
});

export default ProductScreen;