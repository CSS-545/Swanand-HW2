import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Bye() {
  const [username, setUsername] = useState("");

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem("username", username);
      setUsername("");
      Alert.alert("Saved", `Username ${username} saved successfully.`);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleRestore = async () => {
    try {
      const restoredUsername = await AsyncStorage.getItem("username");
      if (restoredUsername !== null) {
        setUsername(restoredUsername);
        Alert.alert("Restored", `Username ${restoredUsername} restored.`);
      } else {
        Alert.alert("No Data", "No username data found.");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        placeholder="Enter your username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <View style={{ flexDirection: "row" }}>
        <Button title="Save" onPress={handleSave} />
        <View style={{ width: 10 }} />
        <Button title="Restore" onPress={handleRestore} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
