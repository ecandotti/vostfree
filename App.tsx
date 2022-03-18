import React from 'react'

import { AuthContextProvider } from '@configs/contexts/AuthContext'
import StackNavigator from '@configs/routes'

const App: React.FC = () => {
    return (
        <AuthContextProvider>
            <StackNavigator />
        </AuthContextProvider>
    )
}

export default App
