import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import { AuthContextProvider } from '@configs/contexts/AuthContext'
import { AnimeContextProvider } from '@configs/contexts/AnimeContext'
import StackNavigator from '@configs/routes'

const App: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide()
    })

    return (
        <AuthContextProvider>
            <AnimeContextProvider>
                <StackNavigator />
            </AnimeContextProvider>
        </AuthContextProvider>
    )
}

export default App
