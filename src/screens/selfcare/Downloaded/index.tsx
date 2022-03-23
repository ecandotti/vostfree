import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Video from 'react-native-video'

import AnimeContext from '@configs/contexts/AnimeContext'

import { Container, Button } from '@components/styled-components'

import { ScreenTypes } from '@customTypes/ScreenTypes'

const Index: React.FC<ScreenTypes> = ({ navigation }) => {
    const { downloadedList, deleteNow } = useContext(AnimeContext)

    const renderCard = (item: any) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                    onPress={() => console.log('hello')}
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
                    keyExtractor={(item: any) => item.id}
                />
            ) : (
                <Text style={{ color: 'white', textAlign: 'center', marginVertical: 20 }}>
                    Vous n'avez rien téléchargé
                </Text>
            )}
            <View>
                <Video
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                    resizeMode="cover"
                    controls
                    muted
                    paused
                    fullscreen
                    style={styles.backgroundVideo}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 50,
        left: 50,
        bottom: 50,
        right: 50,
    },
})

export default Index
