import { UserLogin } from './UserLoginTypes'

export interface AuthContextTypes {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    login: (user: UserLogin) => void
    logout: () => void
}
