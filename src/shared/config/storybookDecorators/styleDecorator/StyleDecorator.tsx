import React from 'react';
import {Story} from "@storybook/react";
import "../../../../app/styles/index.scss"

const StyleDecorator = (story: () => Story) => story()

export default StyleDecorator;