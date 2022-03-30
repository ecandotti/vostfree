import { FlatList } from 'react-native'
import React from 'react'

import { RowTypes } from '@customTypes/RowTypes'

import { TitleText, Container, FlexRow, Bar, Margin } from '@components/styled-components'
import Card from '@components/Card'

const Index: React.FC<RowTypes> = ({ title, items }) => {
    return (
        <Margin mt={10}>
            <Container>
                <FlexRow yPosition="center">
                    <TitleText title={title} />
                    <Bar width="100%" height="12" bgColor="#4ded77" />
                </FlexRow>
            </Container>
            <FlatList
                data={items}
                renderItem={({ item }: any) => <Card item={item} />}
                style={{ marginTop: 10 }}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </Margin>
    )
}

export default Index
