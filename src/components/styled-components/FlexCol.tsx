import React from 'react'
import styled from 'styled-components'

interface FlexColTypes {
    yPosition?: any
    xPosition?: any
}

export const FlexCol: React.FC<FlexColTypes> = ({ children, yPosition, xPosition }) => (
    <FlexColView yPosition={yPosition} xPosition={xPosition}>
        {children}
    </FlexColView>
)

const FlexColView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: ${({ yPosition }: any) => (yPosition ? yPosition : 'flex-start')};
    justify-content: ${({ xPosition }: any) => (xPosition ? xPosition : 'flex-start')};
`
