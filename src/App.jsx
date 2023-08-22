import React from 'react';
import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from './features/Counter/Counter';
import Todolist from './features/Todolist/Todolist';

function App() {
  return (
    <Provider store={store}>

    <div className='mybox '>
      <Counter></Counter>
      <Todolist></Todolist> 
      

    </div>
    </Provider>
  );
}

export default App;
