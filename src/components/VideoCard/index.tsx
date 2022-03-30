import React, { useContext } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import AnimeContext from '@configs/contexts/AnimeContext'

import { FlexRow, TitleText, Text, FlexCol, Padding, Margin } from '../styled-components'
import { useNavigation } from '@react-navigation/native'

const Index: React.FC<any> = ({ video }) => {
    const navigation = useNavigation()

    const { downloadNow } = useContext(AnimeContext)

    return (
        <Margin mt={5} mb={5}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('WatchVideo', {
                        videoUri: video.path,
                    })
                }>
                <FlexRow>
                    <Image
                        source={{ uri: `${video.thumbnail?.path}${video.thumbnail?.extension}` }}
                        style={{ width: 90, height: 50 }}
                    />
                    <Padding pl={5}>
                        <FlexCol xPosition="space-between">
                            <FlexRow>
                                <TitleText title={`Episode ${video.number}`} />
                                <TouchableOpacity onPress={() => downloadNow(video)}>
                                    <IonIcons name="download-outline" color="#4ded77" size={18} />
                                </TouchableOpacity>
                            </FlexRow>
                            <Text>{video.title}</Text>
                            <FlexRow>
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
                                <Text size={10}>23min</Text>
                            </FlexRow>
                        </FlexCol>
                    </Padding>
                </FlexRow>
            </TouchableOpacity>
        </Margin>
    )
}

export default Index
