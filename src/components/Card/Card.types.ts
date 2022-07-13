export interface CardProps{
    img: string,
    title: string,
    description: string,
    buttonLabel: string,
    isRTL? :boolean | true
}

export interface StyledCardProps{
    fontFamily?:string,
    color?: string,
}

export interface StyledCardImgProps{
    src?: string
}