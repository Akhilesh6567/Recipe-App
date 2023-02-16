import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Favourite extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text> Favourite Screen </Text>
            </View>
        )
    }
}
