import React from 'react'
import { ScrollView } from 'react-native'

import Row from '@components/Row'

import { ScreenTypes } from '@types/ScreenTypes'

const AniMock = [
    {
        id: '001',
        title: 'One Piece',
        thumbnail: {
            path: 'https://i.pinimg.com/474x/8a/52/ae/8a52aeea03d6e43c60106ded2f428957',
            extension: '.jpg',
        },
    },
    {
        id: '5690',
        title: 'Naruto',
        thumbnail: {
            path: 'https://i.pinimg.com/originals/6c/0d/6e/6c0d6e4ae8d244915ba5a37fd56b6a1b',
            extension: '.jpg',
        },
    },
    {
        id: '3',
        title: 'Kimetsu No Yahiba',
        thumbnail: {
            path: 'https://www.manga-news.com/public/images/pix/dvd/3677/demon-slayers-anime-visual-2',
            extension: '.jpg',
        },
    },
    {
        id: '7908',
        title: 'My Heroes Academia',
        thumbnail: {
            path: 'https://images-na.ssl-images-amazon.com/images/I/51kV0m6eVvL._SX326_BO1,204,203,200_',
            extension: '.jpg',
        },
    },
    {
        id: '87',
        title: 'Parasyte',
        thumbnail: {
            path: 'https://i.pinimg.com/564x/12/3b/b5/123bb5902da8a34aac43183d8d39c2bc--kiseijuu-paintings',
            extension: '.jpg',
        },
    },
    {
        id: '132',
        title: 'Shinegeki No Kyogin',
        thumbnail: { path: 'https://pbs.twimg.com/media/D67RkOlXkAI16un', extension: '.jpg' },
    },
]

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
