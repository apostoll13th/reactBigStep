import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button, ThemeButton} from './Button';
import {Theme} from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Text'
};

export const Clear = Template.bind({})
Clear.args = {
  theme: ThemeButton.CLEAR,
  children: "Text"
}

export const Ouline = Template.bind({})
Ouline.args = {
  theme: ThemeButton.OUTLINE,
  children: "Text"
}


export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];