import { ItemTypes } from './ItemTypes'

export interface AnimeContextTypes {
    watchlist: never[]
    setWatchlist: React.Dispatch<React.SetStateAction<never[]>>
    downloadedList: never[]
    setDownloadedList: React.Dispatch<React.SetStateAction<never[]>>
    addOrRemoveToWatchlist: (item: any) => void
    makeLike: (item: any) => void
    makeDislike: (item: any) => void
    downloadNow: (item: any) => void
    deleteNow: (path: any) => void
}
