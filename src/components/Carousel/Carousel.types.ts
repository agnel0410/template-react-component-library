type Element = {
    img: string,
    title: string,
    description: string
}


export interface CarouselProps{
    content:{
        backgroundColor?: string,
        color?: string,
        fontFamily?:string,
        buttonLabel: string,
        elements: Element[]
    },
    addMessage: (data:any) => void;

}