import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const DeleteScreen = () => {
  const [id, setId] = useState("");

  const handleDeleteData = () => {
    // Send a DELETE request to remove data
    axios
      .delete(`https://dummy.restapiexample.com/api/v1/employees/${id}`)
      .then((response) => {
        // Handle success, update UI or navigate to another screen
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Delete Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Button title="Delete" onPress={handleDeleteData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcf6f7",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default DeleteScreen;
