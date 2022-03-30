import React, { useContext, useState } from 'react'
import { Text as TextRN } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Image, View, TouchableOpacity, FlatList, Share } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import AnimeContext from '@configs/contexts/AnimeContext'

import { Container, FlexCol, FlexRow, Margin, TitleText, Text } from '@components/styled-components'
import VideoCard from '@components/VideoCard'
import CTACustom from '@components/CTACustom'

const Index: React.FC<ScreenTypes> = ({ route }) => {
    const navigation = useNavigation()

    const { title, author, description, like, dislike, thumbnail, videos, id } = route.params.anime

    const { watchlist, addOrRemoveToWatchlist, makeLike, makeDislike } = useContext(AnimeContext)

    const [seeMore, setSeeMore] = useState(false)
    const [isPaused, setIsPaused] = useState(true)

    const onShare = async () => {
        try {
            await Share.share({
                title: 'Vostfree',
                message: `Partagez la fiche descriptive de ${title} à vos amis 😀`,
            })
        } catch (error: any) {
            alert(error.message)
        }
    }

    const alreadyWatchlisted = watchlist.filter((el: any) => el.id === id)

    return (
        <>
            <FlexRow>
                <Image
                    source={{ uri: `${thumbnail?.path}${thumbnail?.extension}` }}
                    style={{ width: 130, height: 200 }}
                />
                <Container>
                    <TitleText title={title} />
                    <Margin mt={10} />
                    <FlexCol>
                        <TouchableOpacity onPress={() => makeLike(route.params.anime)}>
                            <Text size={20}>
                                {like} <IonIcons name="thumbs-up-outline" size={20} />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => makeDislike(route.params.anime)}>
                            <Text size={20}>
                                {dislike} <IonIcons name="thumbs-down-outline" size={20} />
                            </Text>
                        </TouchableOpacity>
                        <Margin mt={80} />
                        <FlexRow xPosition="space-between">
                            <CTACustom
                                onPress={() =>
                                    navigation.navigate('WatchVideo', {
                                        videoUri: videos.saisons[0][0].path,
                                    })
                                }
                                color="#4ded77"
                                icon="play-circle-outline"
                                name="Episode 1"
                            />
                            <Margin ml={10} mr={10}>
                                <TouchableOpacity
                                    onPress={() => addOrRemoveToWatchlist(route.params.anime)}>
                                    <FlexCol yPosition="center" xPosition="center">
                                        {alreadyWatchlisted.length > 0 ? (
                                            <IonIcons name="heart" color="#4ded77" size={23} />
                                        ) : (
                                            <IonIcons
                                                name="heart-outline"
                                                color="#4ded77"
                                                size={23}
                                            />
                                        )}
                                    </FlexCol>
                                    <Text color="secondary" size={14}>
                                        Watchlist
                                    </Text>
                                </TouchableOpacity>
                            </Margin>
                            <CTACustom
                                onPress={() => onShare()}
                                color="#4ded77"
                                icon="share-social-outline"
                                name="Partager"
                            />
                        </FlexRow>
                    </FlexCol>
                </Container>
            </FlexRow>
            <Container>
                <Margin mt={10} />
                <TextRN numberOfLines={seeMore ? 9999 : 3} style={{ color: '#bdc3c7' }}>
                    {description}
                </TextRN>
                <Margin mt={5} mb={5}>
                    <TouchableOpacity onPress={() => setSeeMore(prevState => !prevState)}>
                        <Text color="secondary">Voir {seeMore ? 'moins' : 'plus'}</Text>
                    </TouchableOpacity>
                </Margin>
                <FlatList
                    data={videos.saisons[0]}
                    renderItem={({ item }) => <VideoCard video={item} />}
                    keyExtractor={item => item.id}
                    ListFooterComponent={
                        <Text color="gray" size={12}>
                            © {author}, {title}
                        </Text>
                    }
                />
            </Container>
        </>
    )
}

export default Index
