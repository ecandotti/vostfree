import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import AnimeContext from 'configs/contexts/AnimeContext'

import { CardTypes } from 'types/CardTypes'

const Index: React.FC<CardTypes> = ({ item, navigation }) => {
    const { watchlist, addOrRemoveToWatchlist } = useContext(AnimeContext)
    const { name, thumbnail, id } = item

    // const isFav = favList.filter((favItem) => favItem.id === id)

    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Character', {
                    character: item,
                })
            }>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                }}>
                <Image
                    source={{ uri: `${thumbnail?.path}.${thumbnail?.extension}` }}
                    style={{ width: 100, height: 100 }}
                />
                <Text>{name}</Text>
                <TouchableOpacity onPress={() => addOrRemoveToWatchlist(item)}>
                    {watchlist.length !== 0 ? (
                        <IonIcons name="heart" size={16} />
                    ) : (
                        <IonIcons name="heart-outline" size={16} />
                    )}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Index
