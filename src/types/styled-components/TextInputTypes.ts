import React from 'react'

export interface TextInputTypes {
    icon: string
    placeholder?: string
    value?: string
    onChangeText: any
    color: string
    secureTextEntry?: boolean
    type: React.HTMLInputTypeAttribute
}
