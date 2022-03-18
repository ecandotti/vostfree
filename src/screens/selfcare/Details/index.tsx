import React from 'react'
import { Text } from 'react-native'

import { ScreenTypes } from 'types/ScreenTypes'

import { Container } from '@components/styled-components'

const Index: React.FC<ScreenTypes> = () => {
    return (
        <Container>
            <Text>Hello Details</Text>
        </Container>
    )
}

export default Index
