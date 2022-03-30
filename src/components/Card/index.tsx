import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { CardTypes } from '@customTypes/CardTypes'
import { useNavigation } from '@react-navigation/native'

import { FlexCol, Margin, Text } from '../styled-components'

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
            <Margin ml={10} mr={10}>
                <FlexCol xPosition="center" yPosition="center">
                    <Image
                        source={{ uri: `${item.thumbnail?.path}${item.thumbnail?.extension}` }}
                        style={{ width: 130, height: 200 }}
                    />
                    <Margin mt={10}>
                        <Text weight="bold">{item.title}</Text>
                    </Margin>
                </FlexCol>
            </Margin>
        </TouchableOpacity>
    )
}

export default Index
