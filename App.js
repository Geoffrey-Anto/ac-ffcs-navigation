import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavContainer from "./Navigation";

export default function App() {
  return <NavContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
