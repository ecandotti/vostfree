import React from 'react'
import styled from 'styled-components'

interface TextTypes {
    size?: number
    color?: 'primary' | 'secondary' | 'gray'
    weight?: 'normal' | 'bold'
}

export const Text: React.FC<TextTypes> = ({ children, size, color, weight }) => (
    <TextView size={size} color={color} weight={weight}>
        {children}
    </TextView>
)

const TextView = styled.Text`
    color: ${({ theme, color = 'primary' }: any) => theme.colors[color]};
    font-size: ${({ size = 16 }: any) => `${size}px`};
    font-weight: ${({ weight = 'normal' }: any) => weight};
`
