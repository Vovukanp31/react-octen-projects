import {useReducer} from "react";


function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'inc': {
        return {...state, counter:state.counter + 1};
      };
      case 'dec': {
        return {...state, counter:state.counter - 1};
      }
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {counter: 0})

  return (
    <div className="App">
      {state.counter}
      <button onClick={() => dispatch({type: 'inc'})}>inc</button>
      <button onClick={() => dispatch({type: 'dec'})}>dec</button>
    </div>
  );
}

export default App;
