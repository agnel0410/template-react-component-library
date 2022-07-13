import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card'


const CardInput ={                          
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"The Everyday Salad",
    description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
    buttonLabel: "View Recepie"
}

export default {
    title: 'InteractiveMessages/Card',
    argTypes: {
      },
    component: Card,
} as ComponentMeta<typeof Card>;


const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SingleCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SingleCard.args = CardInput;