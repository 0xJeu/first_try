import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, Image } from "react-native";
import NoteCard from "./components/noteCard";

export default function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const submitNote = () => {
    if (note.length > 0) {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((note, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notetaking App</Text>
        <Image style={styles.logo} source={require("./assets/favicon.png")} />
      </View>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Hi"
      />
      <Button title="Submit Note" onPress={submitNote} />
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} onDelete={() => deleteNote(index)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#90EE90",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  noteCard: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
