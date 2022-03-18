import { FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import Fuse from 'fuse.js'

import AnimeContext from 'configs/contexts/AnimeContext'

import Search from '@components/Search'
import Card from '@components/Card'
import { Container } from '@components/styled-components'

import { ScreenTypes } from '@types/ScreenTypes'

const Index: React.FC<ScreenTypes> = ({ navigation }) => {
    const { watchlist } = useContext(AnimeContext)
    const [customSearch, setCustomSearch] = useState('')

    const fuse = new Fuse(watchlist, {
        keys: ['name'],
    })

    const fuseSearch = fuse.search(customSearch)

    return (
        <Container>
            <Search
                customSearch={customSearch}
                setCustomSearch={setCustomSearch}
                placeholder="Naruto Shippuden..."
            />
            {fuseSearch.length < 2 ? (
                <FlatList
                    data={fuseSearch}
                    renderItem={(item: any) => <Card item={item.item} navigation={navigation} />}
                />
            ) : null}
        </Container>
    )
}

export default Index
