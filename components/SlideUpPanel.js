import React, { useState } from 'react'
import styles from './SlideUpPanelStyles'
import { Text, View, Dimensions, ScrollView, TextInput, Pressable } from 'react-native'
import DraggablePanel from 'react-native-draggable-panel';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import uuid from 'react-native-uuid';


const SlideUpPanel = (props) => {

    const [noteText, setNoteText] = useState('');

    const onSave = (noteText) => {
        if (noteText.length < 10) {
            alert('Note text must be at least 10 characters long');
        } else {
            props.handleSaveNote(noteText);
            setNoteText('');
        }
    }

    return (
        <>
            <DraggablePanel
                visible={props.visible}
                initialHeight={Dimensions.get('window').height / 2}
                // expandable={true}
                overlayOpacity={0.6}
                fullWidth={true}
                borderRadius={20}
                animationDuration={300}
                onDismiss={props.onDismiss}
            >
                <View style={styles.container}>
                    <Text style={styles.heading}>Notes</Text>

                    <ScrollView style={{ paddingHorizontal: 15 }}>

                        <View style={styles.newNoteView}>
                            <Text style={styles.newNoteText}>Add a note</Text>
                        </View>

                        <View style={styles.noteFieldView}>
                            <TextInput
                                style={styles.noteInput}
                                placeholder='Write note text here...'
                                placeholderTextColor='#777'
                                multiline={true}
                                maxLength={500}
                                onChangeText={(text) => {
                                    setNoteText(text);
                                }}
                                value={noteText}
                                cursorColor='#555'
                            />
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#555', fontSize: 12, marginLeft: 5 }}>
                                    Min 10 characters required*
                                </Text>
                                <Text style={{ color: '#555', fontSize: 12, marginRight: 5 }}>{noteText.length}/500</Text>
                            </View>

                            <Pressable
                                style={styles.saveButton}
                                onPress={() => onSave(noteText)}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </Pressable>

                        </View>

                        <Text style={styles.newNoteText}>Saved notes</Text>

                        {
                            props.selectedRecipeNotes.length === 0 ?
                                <Text style={styles.noNotesText}>No notes saved yet</Text>
                                :

                                props.selectedRecipeNotes.map((note) => {
                                    return (
                                        <View key={note.id} style={styles.savedNoteView}>
                                            <View style={styles.savedNote}>
                                                <Text>{note.text} </Text>
                                            </View>
                                            <View style={styles.savedNoteButtonView}>
                                                <Pressable
                                                    style={styles.deleteSavedNote}
                                                    onPress={() => props.handleDeleteNote(note.id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} size={20} color='rgb(247, 124, 67)' />
                                                </Pressable>
                                            </View>
                                        </View>
                                    )
                                })}




                    </ScrollView>


                </View>
            </DraggablePanel>

        </>
    )
}

export default SlideUpPanel;
