import React from 'react'
import { TouchableOpacity } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

const Index: React.FC = ({ onPress }: any) => (
    <TouchableOpacity onPress={onPress}>
        <IonIcons name="chevron-back-outline" size={18} color="white" />
    </TouchableOpacity>
)

export default Index
