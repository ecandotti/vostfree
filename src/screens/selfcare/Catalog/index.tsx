import React from 'react'
import { ScrollView } from 'react-native'

import Row from '@components/Row'

import { ScreenTypes } from '@types/ScreenTypes'

import { AniMock } from '../../../utils/animock'

const Index: React.FC<ScreenTypes> = () => {
    return (
        <ScrollView>
            <Row title="Dernières sorties" items={AniMock} />
            <Row title="Populaire" items={AniMock} />
            <Row title="Sport" items={AniMock} />
            <Row title="Shonen" items={AniMock} />
        </ScrollView>
    )
}

export default Index
