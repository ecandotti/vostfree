import React, { useContext, useState } from 'react'
import { Text, Image, View, TouchableOpacity, FlatList, Share } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import AnimeContext from '@configs/contexts/AnimeContext'

import { Container, TitleText } from '@components/styled-components'
import VideoCard from '@components/VideoCard'

const Index: React.FC<ScreenTypes> = ({ route }) => {
    const { title, author, description, like, dislike, thumbnail, videos, id } = route.params.anime

    const { watchlist, addOrRemoveToWatchlist } = useContext(AnimeContext)

    const [seeMore, setSeeMore] = useState(false)

    const onShare = async () => {
        try {
            const result = await Share.share({
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
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Image
                    source={{ uri: `${thumbnail?.path}${thumbnail?.extension}` }}
                    style={{ width: 130, height: 200 }}
                />
                <Container>
                    <TitleText title={title} />
                    <View style={{ marginTop: 10, display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ color: 'white' }}>
                            {like} <IonIcons name="thumbs-up-outline" />
                        </Text>
                        <Text style={{ color: 'white' }}>
                            {dislike} <IonIcons name="thumbs-down-outline" />
                        </Text>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 80,
                            }}>
                            <TouchableOpacity
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginHorizontal: 10,
                                }}>
                                <IonIcons name="play-circle-outline" color="#4ded77" size={23} />
                                <Text style={{ color: '#4ded77', fontSize: 12 }}>Episode 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => addOrRemoveToWatchlist(route.params.anime)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginHorizontal: 10,
                                }}>
                                {alreadyWatchlisted.length > 0 ? (
                                    <IonIcons name="heart" color="#4ded77" size={23} />
                                ) : (
                                    <IonIcons name="heart-outline" color="#4ded77" size={23} />
                                )}
                                <Text style={{ color: '#4ded77', fontSize: 12 }}>Watchlist</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => onShare()}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginHorizontal: 10,
                                }}>
                                <IonIcons name="share-social-outline" color="#4ded77" size={23} />
                                <Text style={{ color: '#4ded77', fontSize: 12 }}>Partager</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Container>
            </View>
            <Container>
                <Text
                    numberOfLines={seeMore ? 9999 : 3}
                    style={{ color: '#bdc3c7', marginTop: 10 }}>
                    {description}
                </Text>
                <TouchableOpacity
                    onPress={() => setSeeMore(prevState => !prevState)}
                    style={{ marginVertical: 5 }}>
                    <Text style={{ color: '#4ded77' }}>Voir {seeMore ? 'moins' : 'plus'}</Text>
                </TouchableOpacity>
                <FlatList
                    data={videos.saisons[0]}
                    renderItem={({ item }) => <VideoCard video={item} />}
                    keyExtractor={item => item.id}
                    ListFooterComponent={
                        <Text style={{ color: '#95a5a6', fontSize: 12 }}>
                            © {author}, {title}
                        </Text>
                    }
                />
            </Container>
        </>
    )
}

export default Index
