import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponent/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary button',
  type: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary button',
  type: 'secondary'
}

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Ghost button',
  type: 'ghost'
}
