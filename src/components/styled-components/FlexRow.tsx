import React from 'react'
import styled from 'styled-components'

interface FlexRowTypes {
    yPosition?: any
    xPosition?: any
}

export const FlexRow: React.FC<FlexRowTypes> = ({ children, yPosition, xPosition }) => (
    <FlexRowView yPosition={yPosition} xPosition={xPosition}>
        {children}
    </FlexRowView>
)

const FlexRowView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: ${({ yPosition }: any) => (yPosition ? yPosition : 'flex-start')};
    justify-content: ${({ xPosition }: any) => (xPosition ? xPosition : 'flex-start')};
`
