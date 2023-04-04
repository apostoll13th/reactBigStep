import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import AboutPage from "pages/AboutPage/ui/AboutPage";
import ThemeDecorator from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import {Theme} from "app/providers/ThemeProvider";


export default {
  title: 'Page/About',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  }

} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage/>;

export const Light = Template.bind({});


export  const dark  = Template.bind({})

dark.decorators = [ThemeDecorator(Theme.DARK)]