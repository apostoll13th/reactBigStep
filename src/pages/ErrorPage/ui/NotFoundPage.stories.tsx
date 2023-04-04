import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ThemeDecorator from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import {Theme} from "app/providers/ThemeProvider";
import {NotFoundPage} from "pages/ErrorPage";


export default {
  title: 'Page/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  }

} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Light = Template.bind({});


export  const dark  = Template.bind({})

dark.decorators = [ThemeDecorator(Theme.DARK)]