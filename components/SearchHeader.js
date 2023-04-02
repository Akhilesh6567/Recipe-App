import React from 'react'
import { Text, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import styles from './SearchHeaderStyles'
import { categories } from "../data/constants";
import uuid from "react-native-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

const SearchHeader = (props) => {

    const activeTag = (tag) => {
        return tag === props.tagValue ? true : false;
    }

    const [focused, setFocused] = React.useState(false);

    return (
        <View>
            <View
                style={[styles.searchSection, focused ? { borderWidth: 1.5, borderColor: "#333", padding: 9 } : null]}
            >
                <FontAwesomeIcon
                    style={styles.searchIcon}
                    icon={faSearch}
                    size={20}
                    color={focused ? "#aaa" : "#bbb"}
                />
                <TextInput
                    style={styles.searchBox}
                    onChangeText={
                        text => {
                            props.setSearchValue(text),
                                props.setIsLoading(true)
                            text ? props.setTagValue('') : props.setTagValue('All')
                        }}
                    placeholder='Search for a recipe'
                    placeholderTextColor="#bbb"
                    cursorColor={'#777'}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                >
                </TextInput>
            </View>

            <ScrollView
                contentContainerStyle={styles.contentContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                <Pressable
                    style={activeTag('All') ? styles.activeTag : styles.tag}
                    onPress={() => { props.setTagValue('All'), props.setIsLoading(true) }}
                >
                    <Text
                        style={activeTag('All') ? styles.activeTagText : styles.tagText}
                    >
                        All
                    </Text>
                </Pressable>

                {
                    categories.map((category) => {
                        return (
                            <Pressable
                                key={uuid.v4()}
                                style={activeTag(category) ? styles.activeTag : styles.tag}
                                onPress={() => { props.setTagValue(category), props.setIsLoading(true) }}
                            >
                                <Text
                                    style={activeTag(category) ? styles.activeTagText : styles.tagText}
                                >
                                    {category}
                                </Text>
                            </Pressable>
                        )
                    })
                }

            </ScrollView>

        </View>
    )
}

export default SearchHeader;