import React, {useReducer} from "react";

import css from './App.module.css'



const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, counter1: state.counter1 + 1};
        case 'dec1':
            return {...state, counter1: state.counter1 - 1};
        case 'reset1':
            return {...state, counter1: state.counter1 = 0}

        case 'inc2':
            return {...state, counter2: state.counter2 + 1};
        case 'dec2':
            return {...state, counter2: state.counter2 - 1};
        case 'reset2':
            return {...state, counter2: state.counter2 = 0};

        case 'inc3':
            return {...state, counter3: state.counter3 + 1};
        case 'dec3':
            return {...state, counter3: state.counter3 - 1};
        case 'reset3':
            return {...state, counter3: state.counter3 = 0}
        default: throw new Error('reducer error');
    }
};

function App() {


    const [state, dispatch] = useReducer(reducer, {counter1:0, counter2:0, counter3:0});

    return (
        <div className={css.App}>
           <div className={css.counter}>
               <div>count: {state.counter1}</div>
               <button onClick={() => {
                   dispatch({type: 'inc1'})
               }
               }>INC
               </button>
               <button onClick={() => {
                   dispatch({type: 'dec1'})
               }
               }>DEC
               </button>
               <button onClick={() => {
                   dispatch({type: 'reset1'})
               }
               }>RESET
               </button>
           </div>

            <div className={css.counter}>
                <div>count: {state.counter2}</div>
                <button onClick={() => {
                    dispatch({type: 'inc2'})
                }
                }>INC
                </button>
                <button onClick={() => {
                    dispatch({type: 'dec2'})
                }
                }>DEC
                </button>
                <button onClick={() => {
                    dispatch({type: 'reset2'})
                }
                }>RESET
                </button>
            </div>

            <div className={css.counter}>
                <div>count: {state.counter3}</div>
                <button onClick={() => {
                    dispatch({type: 'inc3'})
                }
                }>INC
                </button>
                <button onClick={() => {
                    dispatch({type: 'dec3'})
                }
                }>DEC
                </button>
                <button onClick={() => {
                    dispatch({type: 'reset3'})
                }
                }>RESET
                </button>
            </div>
        </div>
    );
}

export default App;
