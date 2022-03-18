import React from 'react'
import { Text } from 'react-native'

import { Container } from '@components/styled-components'

import { ScreenTypes } from 'types/ScreenTypes'

const Index: React.FC<ScreenTypes> = () => {
    return (
        <Container>
            <Text>Hello Watchlist</Text>
        </Container>
    )
}

export default Index
