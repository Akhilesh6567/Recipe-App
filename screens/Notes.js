import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./NotesStyles";
import UserContext from "../context/auth/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { Toast } from "toastify-react-native";

const Notes = () => {

  const { notes } = useContext(UserContext).user;
  const {deleteNote} = useContext(UserContext);

  return (
    <View>

      {
        notes.length === 0 ?
          <Text style={styles.noNoteText}>No notes yet</Text>
          :
          notes.map((note) => {
            return (
              <View key={note.id} style={styles.noteView}>
                <View style={styles.noteDeleteView}>
                  <Text style={styles.noteRecipeName}> {note.recipeName} </Text>
                  <Pressable
                    onPress={() => {
                      deleteNote(note.id)
                      Toast.success("Note deleted")
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} size={18} color="red" />
                  </Pressable>
                </View>
                <Text style={styles.noteText}>{note.text}</Text>
              </View>
            )
          })
      }
    </View >
  )
}
export default Notes;
