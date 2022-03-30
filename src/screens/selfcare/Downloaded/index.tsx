import RNFS from 'react-native-fs'
import { FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import AnimeContext from '@configs/contexts/AnimeContext'

import { Container, Button, FlexRow, PText, Margin } from '@components/styled-components'
import { ScreenTypes } from '@customTypes/ScreenTypes'

const Index: React.FC<ScreenTypes> = () => {
    const navigation = useNavigation()

    const { deleteNow } = useContext(AnimeContext)

    const [downloadedList, setDownloadedList] = useState<any>([])

    const getDownloadedAnime = async () => {
        const newList = await RNFS.readDir(RNFS.DocumentDirectoryPath)
        setDownloadedList(newList)
    }

    useEffect(() => {
        getDownloadedAnime()
    }, [])

    useFocusEffect(() => {
        getDownloadedAnime()
    })

    const renderCard = (item: any) => {
        return (
            <FlexRow>
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
            </FlexRow>
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
                <Margin ml={20} mr={20}>
                    <PText>Vous n'avez rien téléchargé</PText>
                </Margin>
            )}
        </Container>
    )
}

export default Index
