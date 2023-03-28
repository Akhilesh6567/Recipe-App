import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./NotesStyles";
import UserContext from "../context/auth/UserContext";

const Notes = () => {

  const { notes } = useContext(UserContext).user;

  return (
    <View>

      {
        notes.length === 0 ?
          <Text style={styles.noNoteText}>No notes yet</Text>
          :
          notes.map((note) => {
            return (
              <View key={note.id} style={styles.noteView}>
                <Text style={styles.noteRecipeName}> {note.recipeName} </Text>
                <Text style={styles.noteText}>{note.text}</Text>
              </View>
            )
          })
      }
    </View >
  )
}
export default Notes;
