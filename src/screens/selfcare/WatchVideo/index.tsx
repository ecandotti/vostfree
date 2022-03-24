import React from 'react'
import { Text, View } from 'react-native'
import VideoPlayer from 'react-native-video-player'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import { Container, TitleText } from '@components/styled-components'

const Index: React.FC<ScreenTypes> = ({ navigation, route }) => {
    const videoUri: string = route.params.videoUri

    const isHttpLink = () => {
        const result = videoUri.split(':')[0]
        return result === 'https' ? true : false
    }

    return (
        <View>
            <VideoPlayer
                video={{ uri: isHttpLink() ? videoUri : `file://${videoUri}` }}
                videoWidth={1600}
                videoHeight={900}
                autoplay
            />
            <Container>
                <TitleText title="Description" />
                <Text style={{ color: 'white', lineHeight: 20, marginTop: 10 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum esse
                    sint facilis autem, mollitia, laboriosam earum fuga eum laborum exercitationem
                    maxime voluptatem sit. Eius, consequatur. Alias sunt fuga a!
                </Text>
            </Container>
        </View>
    )
}

export default Index
