import React from 'react'
import styled from 'styled-components'

import { TitleTextTypes } from '@customTypes/styled-components/TitleTextTypes'

export const TitleText: React.FC<TitleTextTypes> = ({ title }) => <Text>{title}</Text>

const Text = styled.Text`
    margin-right: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    color: white;
`
