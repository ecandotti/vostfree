import React from 'react'
import styled from 'styled-components'

interface MarginTypes {
    mt?: any
    mb?: any
    ml?: any
    mr?: any
}

export const Margin: React.FC<MarginTypes> = ({ children, mt, mb, ml, mr }) => (
    <ViewMargin mt={mt} mb={mb} ml={ml} mr={mr}>
        {children}
    </ViewMargin>
)

const ViewMargin = styled.View`
    margin: ${({ mt = 0, mb = 0, ml = 0, mr = 0 }: any) => `${mt}px ${mr}px ${mb}px ${ml}px `};
`
