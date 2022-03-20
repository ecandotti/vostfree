import { View, FlatList } from 'react-native'
import React from 'react'

import { RowTypes } from 'src/types/RowTypes'

import Card from '@components/Card'
import { TitleText, Container } from '@components/styled-components'

const Index: React.FC<RowTypes> = ({ title, items }) => {
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
                renderItem={({ item }: any) => <Card item={item} />}
                style={{ marginTop: 10 }}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    )
}

export default Index
