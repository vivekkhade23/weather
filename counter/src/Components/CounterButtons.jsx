import React from "react";
import {store} from "../Redux/store"
import {handleAddActionObj,handleReduceActionObj} from "../Redux/action"

const CounterButtons = () => {
  const {dispatch}=store;

  return (
    <div data-testid=" ">
      <button data-testid="addButton" onClick={()=>dispatch(handleAddActionObj())}>ADD</button>
      <button data-testid="reduceButton" onClick={()=>dispatch(handleReduceActionObj())}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
