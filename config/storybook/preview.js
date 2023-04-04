import {addDecorator} from "@storybook/react";
import StyleDecorator from "../../src/shared/config/storybookDecorators/styleDecorator/StyleDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import ThemeDecorator from "../../src/shared/config/storybookDecorators/ThemeDecorators/ThemeDecorators";
import RoutingDecorator from "../../src/shared/config/storybookDecorators/RoutingDecorators/RoutingDecorators";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RoutingDecorator)