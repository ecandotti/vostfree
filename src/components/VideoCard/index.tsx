import React, { useContext } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import AnimeContext from '@configs/contexts/AnimeContext'

import { TitleText } from '../styled-components'
import { useNavigation } from '@react-navigation/native'

const Index: React.FC<any> = ({ video }) => {
    const navigation = useNavigation()

    const { downloadNow } = useContext(AnimeContext)

    return (
        <>
            <TouchableOpacity
                style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}
                onPress={() =>
                    navigation.navigate('WatchVideo', {
                        videoUri: video.path,
                    })
                }>
                <Image
                    source={{ uri: `${video.thumbnail?.path}${video.thumbnail?.extension}` }}
                    style={{ width: 90, height: 50 }}
                />
                <View
                    style={{
                        paddingLeft: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                        <TitleText title={`Episode ${video.number}`} />
                        <TouchableOpacity onPress={() => downloadNow(video)}>
                            <IonIcons name="download-outline" color="#4ded77" size={18} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#ecf0f1' }}>{video.title}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                        <View
                            style={{
                                position: 'relative',
                                height: 5,
                                width: '75%',
                                backgroundColor: '#192a56',
                                borderRadius: 10,
                                marginVertical: 5,
                                marginEnd: 5,
                            }}>
                            <View
                                style={{
                                    position: 'absolute',
                                    height: 5,
                                    backgroundColor: '#4ded77',
                                    left: 0,
                                    width: '10%',
                                    borderRadius: 10,
                                }}
                            />
                        </View>
                        <Text style={{ fontSize: 10, color: '#ecf0f1' }}>23min</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Index
