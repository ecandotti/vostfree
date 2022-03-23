import React from 'react'
import styled from 'styled-components'
import IonIcons from 'react-native-vector-icons/Ionicons'
IonIcons.loadFont()
import { TextInputTypes } from '../../types/styled-components/TextInputTypes'

export const TextInput: React.FC<TextInputTypes> = ({
    icon,
    placeholder,
    value,
    onChangeText,
    style,
    color,
    secureTextEntry,
}) => (
    <View color={color} style={style}>
        <IconContainer style={style}>
            <IonIcons name={icon} size={18} />
        </IconContainer>
        <TextInputContainer
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            color={color}
            cstyle={style}
            secureTextEntry={secureTextEntry}
        />
    </View>
)

const View = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    background-color: ${({ style }: any) => (style?.bgColor ? style.bgColor : 'white')};
`

const IconContainer = styled.View`
    margin-right: 10px;
    background-color: ${({ style }: any) => (style?.bgColor ? style.bgColor : 'white')};
    border: none;
`

const TextInputContainer = styled.TextInput`
    flex: 1;
    border-radius: 5px;
    background-color: ${({ cstyle }: any) => (cstyle?.bgColor ? cstyle.bgColor : 'white')};
    color: black;
`
