export interface ButtonTypes {
    title: string
    onPress: () => void
    style?: {
        color?: string
        bgColor?: string
    }
    icon?: string
}
