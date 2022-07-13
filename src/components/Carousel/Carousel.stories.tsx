import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import Carousel from './Carousel';

const addMessage = (data:String):void=>{
    console.log(data)
}

const LexResponseForCarousel ={
    "templateType":"Carousel",                      
    "version":"1.0",                                  
    "data":{                                          
      "replyMessage":{                             
         "title":"Thanks for selecting!",            
      },
      "content":{  
         "backgroundColor": "transparent",
         "color": "black",
         "buttonLabel":"View Recepie",                                  
         "elements":[                                   
            {
                img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
                title:"The Everyday Salad",
                description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"                  
            },
            {
                img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
                title:"The Everyday Salad",
                description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"                     
            },
             {
                img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
                title:"The Everyday Salad",
                description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"                     
            }
         ]
      }
   }
}


export default {
    title: 'InteractiveMessages/Carousel',
    argTypes: {   
      },
    component: Carousel,
} as ComponentMeta<typeof Carousel>;


const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;


export const SliderCarousel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SliderCarousel.args = {
    content: LexResponseForCarousel.data.content,
    addMessage
};
