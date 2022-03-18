import axios from 'axios'
import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { CONNECT_URI } from '@env'
import { AuthContextTypes } from 'types/AuthContextTypes'
import { UserLogin } from 'types/UserLoginTypes'

const AuthContext = createContext<AuthContextTypes>({
    login: () => {},
    logout: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {},
})

export const AuthContextProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const hydrateToken = async () => {
            const token = await AsyncStorage.getItem('token')
            token && setIsLoggedIn(true)
        }

        hydrateToken()
    }, [])

    const login = async (user: UserLogin) => {
        const query = await axios.post(CONNECT_URI, {
            username: user.username,
            password: user.password,
        })

        if (query.headers['x-access-token']) {
            await AsyncStorage.setItem('token', query.headers['x-access-token'])
            await setIsLoggedIn(true)
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('token')
        await setIsLoggedIn(false)
    }

    const context: AuthContextTypes = {
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext
