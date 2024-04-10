import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";

export default function Hello({ navigation }) {
  const [img, setImg] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();

  const loadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (status === null) {
      requestPermission();
    }

    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container} ref={imageRef} collapsable={false}>
      <StatusBar style="auto" />

      {img ? (
        <View style={{ height: 400, width: "100%" }}>
          <Image style={{ height: 400, width: "100%" }} source={{ uri: img }} />
        </View>
      ) : (
        <View
          style={{
            height: 400,
            width: "100%",
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No image selected</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={loadImage}
        style={{
          margin: 20,
          height: 50,
          padding: 10,
          backgroundColor: "lightgreen",
          color: "white",
          borderRadius: 20,
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Open Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={saveImage}
        style={{
          margin: 20,
          height: 50,
          padding: 10,
          backgroundColor: "lightgreen",
          color: "white",
          borderRadius: 20,
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Save Screenshot</Text>
      </TouchableOpacity>

      <Button
        containerStyle={styles.btn}
        title="Next Feature"
        type="outline"
        onPress={() => navigation.navigate("Load User Settings")}
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
