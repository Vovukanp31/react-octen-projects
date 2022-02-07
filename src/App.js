import './App.css';
import {useReducer} from "react";
import {useForm} from "react-hook-form";

// const reducer = (state, action) = {
//
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]});

  const addDog = (e) => {
    e.preventDefault();

  }

  const addCat = (e) => {
    e.preventDefault()
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
    </div>
  );
}

export default App;
