import { ItemTypes } from './ItemTypes'

export interface AnimeContextTypes {
    addOrRemoveToWatchlist: (item: any) => void
    watchlist: never[]
    setWatchlist: React.Dispatch<React.SetStateAction<never[]>>
}
