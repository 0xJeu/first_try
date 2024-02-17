import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const NoteCard = ({ note, onDelete }) => {
  return (
    <View style={styles.noteCard}>
      <Text>{note}</Text>
      <View>
        <TouchableOpacity onPress={onDelete}>
          <Image source={require("../assets/delete_icon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteCard: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "orange",
  },
});

export default NoteCard;
