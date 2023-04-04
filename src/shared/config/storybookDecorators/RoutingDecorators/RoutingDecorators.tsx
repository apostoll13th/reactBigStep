import React from 'react';
import {Story} from "@storybook/react";
import "../../../../app/styles/index.scss"
import {BrowserRouter} from "react-router-dom";

const RoutingDecorator = (story: () => Story) => {
  return (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  )
}

export default RoutingDecorator;