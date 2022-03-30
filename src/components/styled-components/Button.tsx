import React from 'react'
import styled from 'styled-components'
import IonIcons from 'react-native-vector-icons/Ionicons'

import { ButtonTypes } from '@customTypes/styled-components/ButtonTypes'

export const Button: React.FC<ButtonTypes> = ({ title, onPress, icon, colorType = 'info' }) => (
    <ButtonContainer onPress={onPress} colorType={colorType}>
        {icon && (
            <IconContainer>
                <IonIcons name={icon} size={18} color="white" />
            </IconContainer>
        )}
        <ButtonText colorType={colorType}>{title}</ButtonText>
    </ButtonContainer>
)

const ButtonContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 15px 30px;
    border: 1px solid ${({ theme, colorType }: any) => theme.btnColors[colorType]};
    border-radius: 10px;
    background-color: ${({ theme, colorType }: any) => theme.btnColors[colorType]};
`

const IconContainer = styled.View`
    margin-left: 5px;
    margin-right: 5px;
`

const ButtonText = styled.Text`
    font-weight: bold;
    text-align: center;
    color: ${({ theme }: any) => theme.colors.primary};
    font-size: 16px;
`
