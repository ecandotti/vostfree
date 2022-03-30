import React from 'react'

export interface TextInputTypes {
    icon: string
    placeholder?: string
    value?: string
    onChangeText: any
    secureTextEntry?: boolean
    style?: any
    type: React.HTMLInputTypeAttribute
}
