export interface ButtonTypes {
    title: string
    onPress: () => void
    colorType: 'primary' | 'secondary' | 'danger' | 'info'
    icon?: string
}
