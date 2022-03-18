import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { RowTypes } from 'src/types/RowTypes'
import { ItemTypes } from 'src/types/ItemTypes'

import Card from '@components/Card'
import { TitleText } from '@components/styled-components/TitleText'
import { Container } from '../styled-components'

const Index: React.FC<RowTypes> = ({ title, items }) => {
    const renderCard = ({ item }: any) => <Card item={item} />

    return (
        <View style={{ marginTop: 10 }}>
            <Container>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TitleText title={title} />
                    <View style={{ width: '100%', height: 12, backgroundColor: '#4ded77' }} />
                </View>
            </Container>
            <FlatList
                data={items}
                renderItem={renderCard}
                style={{ marginTop: 10 }}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    )
}

export default Index
