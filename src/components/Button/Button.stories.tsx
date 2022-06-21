import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

const addMessage = (data:String):void=>{
    console.log(data)
}

const LexResponseForMultipleButtons ={
    "templateType":"Button",                      
    "version":"1.0",                                  
    "data":{                                          
      "replyMessage":{                             
         "title":"Thanks for selecting!",            
      },
      "content":{  
         "size": "large",                                     
         "elements":[                                   
            {
               "label":"Apple"                    
            },
            {
               "label":"Orange"                     
            },
             {
               "label":"Banana"                      
            }
         ]
      }
   }
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'InteractiveMessages/Button',
    argTypes: {
        backgroundColor: { control: 'color' },
      },
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MultipleButtons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleButtons.args = {
    content: LexResponseForMultipleButtons.data.content,
    addMessage
};

