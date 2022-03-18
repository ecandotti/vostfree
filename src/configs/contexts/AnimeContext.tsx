import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, createContext, useEffect } from 'react'

import { AnimeContextTypes } from 'types/AnimeContextTypes'
import { ItemTypes } from 'types/ItemTypes'

const AnimeContext = createContext<AnimeContextTypes>({
    addOrRemoveToWatchlist: () => {},
    watchlist: [],
    setWatchlist: () => {},
})

export const AnimeContextProvider: React.FC = ({ children }) => {
    const [watchlist, setWatchlist] = useState<any>([])

    const hydrateFavList = async () => {
        const watchlistExist = await AsyncStorage.getItem('watchlist')
        watchlistExist && setWatchlist(JSON.parse(watchlistExist))
    }

    useEffect(() => {
        hydrateFavList()
    }, [])

    useEffect(() => {
        AsyncStorage.setItem('watchlist', JSON.stringify(watchlist))
    }, [watchlist])

    const addOrRemoveToWatchlist = (item: ItemTypes) => {
        const alreadyWatchlisted = watchlist.findIndex((el: ItemTypes) => el.id === item.id)

        if (alreadyWatchlisted !== -1) {
            setWatchlist(watchlist.filter((el: ItemTypes) => el.id !== item.id))
        } else {
            setWatchlist([...watchlist, item])
        }
    }

    const context: AnimeContextTypes = {
        addOrRemoveToWatchlist: () => {},
        watchlist: [],
        setWatchlist: () => {},
    }
    return <AnimeContext.Provider value={context}>{children}</AnimeContext.Provider>
}

export default AnimeContext
