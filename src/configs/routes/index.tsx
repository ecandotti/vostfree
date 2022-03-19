import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthContext from '../contexts/AuthContext'

import SelfcareStack from './SelfcareStack'

import Login from '@screens/guest/Login'
import Details from '@screens/selfcare/Details'

import GoBack from '@components/GoBack'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#2f3643' } }}>
                {isLoggedIn ? (
                    <Stack.Group>
                        <Stack.Screen
                            name="Selfcare"
                            component={SelfcareStack}
                            options={{ headerShown: false, animationTypeForReplace: 'push' }}
                        />
                        <Stack.Screen
                            name="Details"
                            component={Details}
                            options={({ navigation }) => ({
                                animationTypeForReplace: 'push',
                                headerStyle: { backgroundColor: '#34495e' },
                                headerLeft: () => <GoBack onPress={() => navigation.goBack()} />,
                                headerTitle: '',
                            })}
                        />
                    </Stack.Group>
                ) : (
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ animationTypeForReplace: 'push' }}
                        />
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
