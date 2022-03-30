import React, { useContext } from 'react'
import { Dimensions, FlatList, View } from 'react-native'

import AnimeContext from '@configs/contexts/AnimeContext'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import { Container, Margin, PText } from '@components/styled-components'
import Card from '@components/Card'

const Index: React.FC<ScreenTypes> = () => {
    const { watchlist } = useContext(AnimeContext)

    const { width } = Dimensions.get('window')

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
                <Margin mt={20} mb={20}>
                    <PText>Vous n'avez rien watchlister</PText>
                </Margin>
            )}
        </Container>
    )
}

export default Index
