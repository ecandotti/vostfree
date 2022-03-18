import { ItemTypes } from './ItemTypes'

export interface AnimeContextTypes {
    addOrRemoveToWatchlist: (item: ItemTypes) => void
    watchlist: never[]
    setWatchlist: React.Dispatch<React.SetStateAction<never[]>>
}
