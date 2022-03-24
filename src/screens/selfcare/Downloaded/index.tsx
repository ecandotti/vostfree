import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Video from 'react-native-video'

import AnimeContext from '@configs/contexts/AnimeContext'

import { Container, Button } from '@components/styled-components'

import { ScreenTypes } from '@customTypes/ScreenTypes'
import { useNavigation } from '@react-navigation/native'

const Index: React.FC<ScreenTypes> = () => {
    const navigation = useNavigation()

    const { downloadedList, deleteNow } = useContext(AnimeContext)

    const renderCard = (item: any) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                    onPress={() =>
                        navigation.navigate('WatchVideo', {
                            videoUri: item.path,
                        })
                    }
                    title={item.name}
                    style={{ bgColor: '#3c9648' }}
                />
                <Button
                    onPress={() => deleteNow(item.path)}
                    title=""
                    icon="trash-outline"
                    style={{ bgColor: '#c0392b', color: 'white' }}
                />
            </View>
        )
    }

    return (
        <Container>
            {downloadedList.length > 0 ? (
                <FlatList
                    data={downloadedList}
                    renderItem={({ item }) => renderCard(item)}
                    keyExtractor={(item: any) => item.path}
                />
            ) : (
                <Text style={{ color: 'white', textAlign: 'center', marginVertical: 20 }}>
                    Vous n'avez rien téléchargé
                </Text>
            )}
        </Container>
    )
}

export default Index
