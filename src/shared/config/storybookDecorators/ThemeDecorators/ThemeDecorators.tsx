import React from 'react';
import {Story} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";

// eslint-disable-next-line react/display-name
const ThemeDecorator = (theme:Theme) => (Story:Story) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
  
}

export default ThemeDecorator;