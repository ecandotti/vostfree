import React from 'react'
import { View } from 'react-native'
import VideoPlayer from 'react-native-video-player'

import { ScreenTypes } from '@customTypes/ScreenTypes'

const Index: React.FC<ScreenTypes> = ({ navigation, route }) => {
    const videoUri: string = route.params.videoUri

    const isHttpLink = () => {
        const result = videoUri.split(':')[0]
        console.log(result)

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
        </View>
    )
}

export default Index
