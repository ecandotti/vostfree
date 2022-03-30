import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import FlashMessage from 'react-native-flash-message'
import { ThemeProvider } from 'styled-components'

import { AuthContextProvider } from '@configs/contexts/AuthContext'
import { AnimeContextProvider } from '@configs/contexts/AnimeContext'
import { myTheme } from '@configs/themes/Theme'
import StackNavigator from '@configs/routes'

const App: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide()
    })

    return (
        <ThemeProvider theme={myTheme}>
            <AuthContextProvider>
                <AnimeContextProvider>
                    <StackNavigator />
                    <FlashMessage position="top" />
                </AnimeContextProvider>
            </AuthContextProvider>
        </ThemeProvider>
    )
}

export default App
