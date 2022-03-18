import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { CardTypes } from '@types/CardTypes'

const Index: React.FC<CardTypes> = ({ item, navigation }) => {
    return (
        <TouchableOpacity style={{ width: 130, marginRight: 20 }}>
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
