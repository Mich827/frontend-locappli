import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNickname } from "../reducers/user";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");

  const handleSubmit = () => {
    dispatch(updateNickname(nickname));
    navigation.navigate("TabNavigator");
  };
  return (
    <KeyboardAvoidingView
      style={StyleSheet.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image style={StyleSheet.image} source={require("../assets/map.png")} />
      <Text style={StyleSheet.title}>Welcome to Locappli</Text>
      <TextInput
        placeholder="write nickname"
        onChangeText={(value) => setNickname(value)}
        value={nickname}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.textButton}>Go to map</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "50%",
  },
  title: {
    width: "80%",
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    width: "80%",
    marginTop: 25,
    borderBottomColor: "#ec6e5b",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    paddingTop: 8,
    width: "80%",
    marginTop: 30,
    backgroundColor: "#ec6e5b",
    borderRadius: 10,
    marginBottom: 80,
  },
  textButton: {
    color: "#ffffff",
    height: 30,
    fontWeight: "600",
    fontSize: 16,
  },
});
