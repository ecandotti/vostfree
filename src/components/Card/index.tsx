import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { CardTypes } from '@types/CardTypes'
import { useNavigation } from '@react-navigation/native'

const Index: React.FC<CardTypes> = ({ item }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={{ width: 130, marginRight: 20 }}
            onPress={() =>
                navigation.navigate('Details', {
                    anime: item,
                })
            }>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 10,
                }}>
                <Image
                    source={{ uri: `${item.thumbnail?.path}${item.thumbnail?.extension}` }}
                    style={{ width: 130, height: 200 }}
                />
                <Text style={{ color: 'white', marginTop: 10, fontWeight: 'bold' }}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Index
