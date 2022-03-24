import React, { useContext } from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'

import AnimeContext from '@configs/contexts/AnimeContext'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import { Container } from '@components/styled-components'
import Card from '@components/Card'

const Index: React.FC<ScreenTypes> = () => {
    const { watchlist } = useContext(AnimeContext)

    const { width, height } = Dimensions.get('window')

    return (
        <Container>
            {watchlist.length > 0 ? (
                <FlatList
                    data={watchlist}
                    renderItem={({ item }: any) => (
                        <View style={{ width: width / 2, display: 'flex', alignItems: 'center' }}>
                            <Card item={item} />
                        </View>
                    )}
                    contentContainerStyle={{ marginTop: 10 }}
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
