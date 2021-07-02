import { useState } from "react";

export const useCounter = (initialValue, range = 1) => {
  console.log("useCounter");
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    console.log(counter + "+" + range);
    setCounter(counter + range);
  };
  const decrement = () => {
    setCounter(counter - range);
  };
  return [counter, increment, decrement];
};
