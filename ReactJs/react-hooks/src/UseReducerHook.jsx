import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return { count: state.count - 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
  }
};

// const handleIncrement = useCallback(() => {
//   dispatch({ type: "INCREAMENT" });
// });

// const handleDecrement = useCallback(() => {
//   dispatch({ type: "DECREMENT" });
// });

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div className="use_reducer_main">
      <button
        onClick={() => {
          dispatch({ type: "INCREAMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        +
      </button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {state.showText && <h1>You have hit + button</h1>}
    </div>
  );
};

export default UseReducerHook;
