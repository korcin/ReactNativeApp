import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Appbar, Avatar, Badge } from "react-native-paper";
import { MaterialIcons } from "react-native-vector-icons";

const ProfileScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#0cbaba", "#380036"]} style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.Content title="Twój profil" />
        <MaterialIcons
          style={styles.icon}
          name="logout"
          size={40}
          color="red"
          onPress={() => navigation.goBack()}
        />
      </Appbar.Header>

      <Avatar.Icon size={100} icon="account" style={styles.avatar} />
      <Badge style={styles.badge}></Badge>

      <View style={styles.container}>
        <Text style={styles.text}></Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("CameraScreen")}
        style={styles.touch}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          Zrób zdjęcie
        </Text>
        <MaterialIcons name="photo-camera" size={22} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ComplaintScreen")}
        style={styles.touch}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          Złóż reklamację
        </Text>
        <MaterialIcons name="chat" size={22} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 10,
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
  avatar: {
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    backgroundColor: "royalblue",
  },
  badge: {
    backgroundColor: "green",
    position: "relative",
    marginRight: 160,
    marginTop: -20,
    borderWidth: 2,
  },
  touch: {
    backgroundColor: "#5f0a87",
    position: "relative",
    padding: 20,
    width: 350,
    marginLeft: 25,
    marginTop: 15,
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
