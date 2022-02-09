import Form from "./components/form/Form";
import ToDoList from "./components/toDoList/ToDoList";

import css from './app.module.css'


function App() {
  return (
    <div className={css.app}>
      <Form/>

        <ToDoList/>

    </div>
  );
}

export default App;
