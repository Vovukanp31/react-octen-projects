import {useReducer} from "react";
import {useForm} from "react-hook-form";

import Cats from "./components/cats/Cats";
import Dogs from "./components/dogs/Dogs";

const reducer = (state, action) => {

    switch (action.type) {
        case 'addDog' : {
            return {...state, dogs: [...state.dogs, action.payload.dog]}
        }

        case 'deleteDog' : {
            return {...state, dogs:state.dogs.filter(dog => dog.id !== action.payload.id)}
        }

        case 'addCat' : {
            return {...state, cats: [...state.cats, action.payload.cat]}
        }

        case 'deleteCat' : {
            return {...state, cats:state.cats.filter(cat => cat.id !== action.payload.id)}
        }
        default:
            return state
    }
};


function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const addDog = (data) => {
        const dog = {
            name: data.dog,
            id: new Date().getTime()
        }
        dispatch({type: 'addDog', payload: {dog}})
    };

    const deleteDog = (id) => {
        dispatch({type: 'deleteDog', payload: {id}})
    }

    const addCat = (data) => {
        const cat = {
            name: data.cat,
            id: new Date().getTime()
        }
        dispatch({type: 'addCat', payload: {cat}})
    };

    const deleteCat = (id) => {
        dispatch({type:'deleteCat', payload: {id}})
    }

    const {register, handleSubmit} = useForm()

    return (
        <div className="App">

            <form>
                <input type="text" {...register('cat')}/>
                <button onClick={handleSubmit(addCat)}>add cat</button>

                <input type="text" {...register('dog')}/>
                <button onClick={handleSubmit(addDog)}>add dog</button>
            </form>

            <div>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>
        </div>
    );
}

export default App;
