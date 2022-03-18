import React from 'react'

import { TextInput } from '@components/styled-components'

import { SearchTypes } from '../../types/SearchTypes'

const Index: React.FC<SearchTypes> = ({ customSearch, setCustomSearch, placeholder }) => {
    return (
        <TextInput
            icon="search-outline"
            placeholder={placeholder}
            value={customSearch}
            style={{ bgColor: '#ecf0f1' }}
            color="#000"
            type={'text'}
            onChangeText={(e: any) => setCustomSearch(e)}
        />
    )
}

export default Index
