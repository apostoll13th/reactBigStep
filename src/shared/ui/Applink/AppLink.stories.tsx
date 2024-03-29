import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import ThemeDecorator from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import ThemeDecorators from "shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import {AppLink, AppLinkTheme} from "shared/ui/Applink/AppLink";
import {Theme} from "../../../app/providers/ThemeProvider";

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "text",
  theme:AppLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "text",
  theme: AppLinkTheme.SECONDARY
}


export const Red = Template.bind({});
Red.args = {
  children: "text",
  theme:AppLinkTheme.RED
};


export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  children: "text",
  theme:AppLinkTheme.PRIMARY
};

PrimaryDark.decorators = [ThemeDecorators(Theme.DARK)]

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: "text",
  theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const RedDark = Template.bind({});
RedDark.args = {
  children: "text",
  theme:AppLinkTheme.RED
};

RedDark.decorators = [ThemeDecorator(Theme.DARK)]