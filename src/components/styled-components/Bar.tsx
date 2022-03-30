import React from 'react'
import styled from 'styled-components'

interface BarTypes {
    width?: any
    height?: any
    bgColor?: any
}

export const Bar: React.FC<BarTypes> = ({ width, height, bgColor }) => (
    <BarView width={width} height={height} bgColor={bgColor} />
)

const BarView = styled.View`
    width: ${({ width }: any) => `${width}%`};
    height: ${({ height }: any) => `${height}px`};
    background-color: ${({ bgColor }: any) => bgColor};
`
