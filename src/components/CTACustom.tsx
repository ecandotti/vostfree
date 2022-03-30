import React from 'react'
import { TouchableOpacity } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

import { FlexCol, Margin, Text } from './styled-components'

interface CTACustomTypes {
    onPress: any
    name: any
    icon: any
    color?: any
}

const CTACustom: React.FC<CTACustomTypes> = ({ onPress, icon, color, name }) => {
    return (
        <Margin ml={10} mr={10}>
            <TouchableOpacity onPress={onPress}>
                <FlexCol xPosition="center" yPosition="center">
                    <IonIcons name={icon} color={color} size={23} />
                    <Text color="secondary" size={14}>
                        {name}
                    </Text>
                </FlexCol>
            </TouchableOpacity>
        </Margin>
    )
}

export default CTACustom
