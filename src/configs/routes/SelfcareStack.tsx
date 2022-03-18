import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons'
IonIcons.loadFont()

import Catalog from '@screens/selfcare/Catalog'
import Watchlist from '@screens/selfcare/Watchlist'
import Search from '@screens/selfcare/Search'
import Account from '@screens/selfcare/Account'

const Tab = createBottomTabNavigator()

const SelfcareStack: React.FC = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: '#2c3e50' }}
            screenOptions={{
                tabBarStyle: { backgroundColor: '#34495e' },
                tabBarActiveTintColor: '#4ded77',
                tabBarInactiveTintColor: '#bdc3c7',
                headerStyle: { backgroundColor: '#34495e' },
                headerTitleStyle: { fontSize: 28, color: 'white', textAlign: 'left' },
            }}>
            <Tab.Screen
                name="Catalogue"
                component={Catalog}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IonIcons name="albums-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Ma Watchlist"
                component={Watchlist}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IonIcons name="list-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Rechercher"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IonIcons name="search-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Mon compte"
                component={Account}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IonIcons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default SelfcareStack
