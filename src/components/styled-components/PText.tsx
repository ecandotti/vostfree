import React from 'react'
import styled from 'styled-components'

export const PText: React.FC = ({ children }) => <PTextView>{children}</PTextView>

const PTextView = styled.Text`
    color: ${({ theme }: any) => theme.colors.primary};
    line-height: 20px;
`
