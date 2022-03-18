import React from 'react'

import { TextInput } from 'components/styled-components'

import { SearchTypes } from 'types/SearchTypes'

const Index: React.FC<SearchTypes> = ({ customSearch, setCustomSearch, placeholder }) => {
    return (
        <TextInput
            icon="search-outline"
            placeholder={placeholder}
            value={customSearch}
            color="#fff"
            type={'text'}
            onChangeText={(e: any) => setCustomSearch(e)}
        />
    )
}

export default Index
