import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponent/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardExample.args = {
  header: 'This is a card heading',
  text: 'this is card text!',
  imgAlt: "Example image",
  imgSrc: "https://picsum.photos/200/300",
  link: "#",
  linkText: "Go to example",
  color: "white",
  backgroundColor: "#2E2EFF",
};