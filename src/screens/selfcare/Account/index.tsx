import React, { useContext } from 'react'

import AuthContext from 'configs/contexts/AuthContext'

import { ScreenTypes } from 'types/ScreenTypes'

import { Button, Container } from '@components/styled-components'

const Index: React.FC<ScreenTypes> = () => {
    const { logout } = useContext(AuthContext)

    return (
        <Container>
            <Button
                title="Deconnexion"
                onPress={() => logout()}
                icon="leaf-outline"
                style={{ color: 'white' }}
            />
        </Container>
    )
}

export default Index
