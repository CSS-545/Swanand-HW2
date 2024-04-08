import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Hello({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD!</Text>
      <StatusBar style="auto" />
      <Button
        containerStyle={styles.btn}
        title="Next Page"
        type="outline"
        onPress={() => navigation.navigate("Bye")}
      />
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
  btn: {
    width: 300,
    marginTop: 32,
  },
});
