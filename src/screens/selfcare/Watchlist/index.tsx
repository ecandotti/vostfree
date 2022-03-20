import React, { useContext } from 'react'
import { FlatList } from 'react-native'

import AnimeContext from '@configs/contexts/AnimeContext'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import { Container } from '@components/styled-components'
import Card from '@components/Card'

const Index: React.FC<ScreenTypes> = () => {
    const { watchlist } = useContext(AnimeContext)

    return (
        <Container>
            <FlatList
                data={watchlist}
                renderItem={({ item }: any) => <Card item={item} />}
                style={{ marginTop: 10 }}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </Container>
    )
}

export default Index
