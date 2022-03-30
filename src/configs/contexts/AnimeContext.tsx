import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNFS from 'react-native-fs'

import { AnimeContextTypes } from '@customTypes/AnimeContextTypes'
import { showMessage } from 'react-native-flash-message'

const AnimeContext = createContext<AnimeContextTypes>({
    watchlist: [],
    setWatchlist: () => {},
    downloadedList: [],
    setDownloadedList: () => {},
    addOrRemoveToWatchlist: () => {},
    makeLike: () => {},
    makeDislike: () => {},
    downloadNow: () => {},
    deleteNow: () => {},
})

export const AnimeContextProvider: React.FC = ({ children }) => {
    const [watchlist, setWatchlist] = useState<any>([])
    const [downloadedList, setDownloadedList] = useState<any>([])

    const hydrateWatchList = async () => {
        const watchlistExist = await AsyncStorage.getItem('watchlist')
        watchlistExist && setWatchlist(JSON.parse(watchlistExist))
    }

    const hydrateDownloadedList = async () => {
        const readFiles = await RNFS.readDir(RNFS.DocumentDirectoryPath)
        setDownloadedList(readFiles)
    }

    useEffect(() => {
        hydrateWatchList()
        hydrateDownloadedList()
    }, [])

    useEffect(() => {
        AsyncStorage.setItem('watchlist', JSON.stringify(watchlist))
    }, [watchlist])

    const addOrRemoveToWatchlist = (item: any) => {
        const alreadyWatchlisted = watchlist.findIndex((el: any) => el.id === item.id)

        if (alreadyWatchlisted !== -1) {
            setWatchlist(watchlist.filter((el: any) => el.id !== item.id))
        } else {
            setWatchlist([...watchlist, item])
        }
    }

    const downloadNow = async (item: any) => {
        const pathVideo = `${RNFS.DocumentDirectoryPath}/${item.title}.mp4`

        showMessage({
            message: 'Téléchargement en cours..',
            type: 'info',
        })

        try {
            const videoOptions = {
                fromUrl: `${item.path}`,
                toFile: pathVideo,
                background: true,
            }

            await RNFS.downloadFile(videoOptions)

            const newList = await RNFS.readDir(RNFS.DocumentDirectoryPath)
            setDownloadedList(newList)

            showMessage({
                message: 'Téléchargement réussi !',
                type: 'success',
            })
        } catch (error) {
            showMessage({
                message: "Une erreur c'est produite !",
                type: 'warning',
            })
        }
    }

    const deleteNow = async (path: any) => {
        showMessage({
            message: 'Suppression en cours..',
            type: 'info',
        })

        try {
            await RNFS.unlink(path)
            await setDownloadedList(downloadedList.filter((el: any) => el.path !== path))

            showMessage({
                message: 'Suppression réussi !',
                type: 'danger',
            })
        } catch (error) {
            showMessage({
                message: "Une erreur c'est produite !",
                type: 'warning',
            })
        }
    }

    const makeLike = async (item: any) => {
        item.like = item.like + 1
    }

    const makeDislike = async (item: any) => {
        item.dislike = item.dislike - 1
    }

    const context: AnimeContextTypes = {
        watchlist,
        setWatchlist,
        downloadedList,
        setDownloadedList,
        addOrRemoveToWatchlist,
        makeLike,
        makeDislike,
        downloadNow,
        deleteNow,
    }
    return <AnimeContext.Provider value={context}>{children}</AnimeContext.Provider>
}

export default AnimeContext
