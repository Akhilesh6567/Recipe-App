import React from 'react'
import { Text, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import styles from './SearchHeaderStyles'
import { categories } from "../data/constants";
import uuid from "react-native-uuid";

const SearchHeader = (props) => {

    const activeTag = (tag) => {
        return tag === props.tagValue ? true : false;
    }

    return (
        <View>

            <View style={styles.container}>
                <TextInput
                    style={styles.searchBox}
                    onChangeText={
                        text => {
                            props.setSearchValue(text),
                                props.setIsLoading(true),
                                props.setTagValue('')
                        }}
                    placeholder="Search Recipe"
                    placeholderTextColor="#bbb"
                    cursorColor={'#555'}
                >
                </TextInput>
            </View>

            <ScrollView
                contentContainerStyle={styles.contentContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                <Pressable
                    // className="tag"
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