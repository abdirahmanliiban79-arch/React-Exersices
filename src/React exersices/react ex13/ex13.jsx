import { useReducer } from "react";

let initialState = { countA: 0, countB: 0 };

const Reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, countA: state.countA + 1 };
    case "decrementA":
      return { ...state, countA: state.countA > 0 ? state.countA - 1 : 0 };
    case "incrementB":
      return { ...state, countB: state.countB + 1 };
    case "decrementB":
      return { ...state, countB: state.countB > 0 ? state.countB - 1 : 0 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div>
      <div>
        <h1>Double Counter</h1>
        <h2>Counter A: {state.countA}</h2>
        <button onClick={() => dispatch({ type: "incrementA" })}>A+</button>
        <button
          disabled={state.countA == 0}
          onClick={() => dispatch({ type: "decrementA" })}
        >
          A-
        </button>
      </div>
      <div>
        <h2>Counter B:{state.countB}</h2>
        <button onClick={() => dispatch({ type: "incrementB" })}>B+</button>
        <button
          disabled={state.countB == 0}
          onClick={() => dispatch({ type: "decrementB" })}
        >
          B-
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>ResetAll</button>
    </div>
  );
};

export default CounterWithReducer;
