import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {LoaderPage} from "shared/ui/Loader/LoaderPage";
import ThemeDecorator from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import {Theme} from "app/providers/ThemeProvider";

export default {
  title: 'shared/Loader',
  component: LoaderPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof LoaderPage>;

const Template: ComponentStory<typeof LoaderPage> = (args) => <LoaderPage {...args} />;

export const Light = Template.bind({});
Light.args = {
};


export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]