import React, { useContext } from 'react'
import { FlatList, Text } from 'react-native'

import AnimeContext from '@configs/contexts/AnimeContext'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import { Container } from '@components/styled-components'
import Card from '@components/Card'

const Index: React.FC<ScreenTypes> = () => {
    const { watchlist } = useContext(AnimeContext)

    return (
        <Container>
            {watchlist.length > 0 ? (
                <FlatList
                    data={watchlist}
                    renderItem={({ item }: any) => <Card item={item} />}
                    style={{ marginTop: 10 }}
                    numColumns={2}
                    keyExtractor={(item: any) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <Text style={{ color: 'white', textAlign: 'center', marginVertical: 20 }}>
                    Vous n'avez rien watchlister
                </Text>
            )}
        </Container>
    )
}

export default Index
