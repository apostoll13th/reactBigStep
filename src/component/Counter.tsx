import { useState } from "react";
import "./index.scss";
// @ts-ignore
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    return setValue(value + 1);
  };

  return (
    <div>
      <h1>{value} </h1>
      <button className={classes.btn} onClick={increment}>
        Increment
      </button>
    </div>
  ); 
};
export default Counter;
