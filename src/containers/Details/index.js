import React from 'react'
import { View, Text } from 'react-native'

export default function DetailScreen({ route, navigation }) {
    const { result } = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>{result.name}</Text>
        </View>
    )
}