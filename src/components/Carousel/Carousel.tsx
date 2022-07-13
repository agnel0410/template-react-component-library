import React from 'react';
import ECarousel from "@itseasy21/react-elastic-carousel";
import Card from '../Card';
import { CarouselProps} from './Carousel.types';



const Carousel:React.FunctionComponent<CarouselProps> = ({
    content,
    addMessage,
    ...props
})=>{
    const {buttonLabel, fontFamily, backgroundColor, color, elements} = content;
    const breakPoints = [
        {width: 500, itemsToShow:1},
        {width: 768, itemsToShow:2},
        {width: 1200, itemsToShow:3},
        {width: 1500, itemsToShow:4}
      ]
    return(
            <ECarousel isRTL= {false}>
                {elements.map(element => <Card img={element.img} title={element.title} description={element.description} buttonLabel={buttonLabel}></Card>)}
            </ECarousel>
    )
}

export default Carousel