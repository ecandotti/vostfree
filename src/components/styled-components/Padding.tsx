import React from 'react'
import styled from 'styled-components'

interface PaddingTypes {
    pt?: any
    pb?: any
    pl?: any
    pr?: any
}

export const Padding: React.FC<PaddingTypes> = ({ children, pt, pb, pl, pr }) => (
    <ViewPadding pt={pt} pb={pb} pl={pl} pr={pr}>
        {children}
    </ViewPadding>
)

const ViewPadding = styled.View`
    padding: ${({ pt = 0, pb = 0, pl = 0, pr = 0 }: any) => `${pt}px ${pr}px ${pb}px ${pl}px `};
`
