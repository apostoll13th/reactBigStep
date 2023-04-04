import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import {ErrorPage} from "widgets/ui/ErrorPage/ErrorPage";

export default {
  title: 'widget/ErroPage',
  component: ErrorPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
