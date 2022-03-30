import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'

export const Container: React.FC = ({ children }) => (
    <SafeAreaView>
        <ViewContainer>{children}</ViewContainer>
    </SafeAreaView>
)

const ViewContainer = styled.View`
    padding: 0 10px;
`
