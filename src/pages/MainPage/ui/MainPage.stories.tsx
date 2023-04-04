import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ThemeDecorator from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import {Theme} from "app/providers/ThemeProvider";
import MainPage from "pages/MainPage/ui/MainPage";


export default {
  title: 'Page/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  }

} as ComponentMeta<typeof MainPage>;


const Template: ComponentStory<typeof MainPage> = () => <MainPage  />;

export const Light = Template.bind({});


export  const dark  = Template.bind({});

dark.decorators = [ThemeDecorator(Theme.DARK)];