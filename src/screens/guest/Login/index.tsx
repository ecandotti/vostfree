import React, { useContext, useState } from 'react'
import { Image, Dimensions } from 'react-native'

import { Container, Button, TextInput, FlexCol, Margin } from '@components/styled-components'

import AuthContext from '@configs/contexts/AuthContext'

import { UserLogin } from '@customTypes/UserLoginTypes'

const win = Dimensions.get('window')

const Index: React.FC = () => {
    const { login } = useContext(AuthContext)

    const [user, setUser] = useState<UserLogin>({
        username: '',
        password: '',
    })

    return (
        <Container>
            <FlexCol xPosition="center" yPosition="center">
                <Image
                    style={{
                        width: win.width / 2,
                        height: win.width / 4,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                    resizeMode="stretch"
                    source={{
                        uri: 'https://www.meilleure-innovation.com/wp-content/uploads/2021/11/vostfree-1.png',
                    }}
                />
                <Margin mb={50} />
                <TextInput
                    placeholder="Username"
                    onChangeText={(e: string) => setUser({ ...user, username: e })}
                    icon="person-outline"
                    type="text"
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={(e: string) => setUser({ ...user, password: e })}
                    secureTextEntry
                    icon="key-outline"
                    type="password"
                />
                <Button title="Connexion" onPress={() => login(user)} colorType="secondary" />
            </FlexCol>
        </Container>
    )
}

export default Index
