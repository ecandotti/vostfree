import React, { useContext, useState } from 'react'
import { View, Image, Dimensions } from 'react-native'

import { Container, Button, TextInput } from '@components/styled-components'

import AuthContext from '@configs/contexts/AuthContext'

import { UserLogin } from 'types/UserLoginTypes'

const win = Dimensions.get('window')

const Index: React.FC = () => {
    const { login } = useContext(AuthContext)

    const [user, setUser] = useState<UserLogin>({
        username: '',
        password: '',
    })

    return (
        <Container>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ marginBottom: 50 }}>
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
                </View>
                <TextInput
                    placeholder="Username"
                    onChangeText={(e: string) => setUser({ ...user, username: e })}
                    color="#dfe6e9"
                    icon="person-outline"
                    type="text"
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={(e: string) => setUser({ ...user, password: e })}
                    secureTextEntry
                    color="#dfe6e9"
                    icon="key-outline"
                    type="password"
                />
                <Button
                    title="Connexion"
                    onPress={() => login(user)}
                    style={{ color: '#c23616', bgColor: '#3c9648' }}
                />
            </View>
        </Container>
    )
}

export default Index
