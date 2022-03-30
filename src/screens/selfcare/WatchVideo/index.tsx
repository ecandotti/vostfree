import React from 'react'
import { View } from 'react-native'
import VideoPlayer from 'react-native-video-player'

import { ScreenTypes } from '@customTypes/ScreenTypes'

import { Container, TitleText, PText } from '@components/styled-components'

const Index: React.FC<ScreenTypes> = ({ route }) => {
    const videoUri: string = route.params.videoUri

    const isHttpLink = () => {
        const result = videoUri.split(':')[0]
        return result === 'https'
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
                <PText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum esse
                    sint facilis autem, mollitia, laboriosam earum fuga eum laborum exercitationem
                    maxime voluptatem sit. Eius, consequatur. Alias sunt fuga a!
                </PText>
            </Container>
        </View>
    )
}

export default Index
