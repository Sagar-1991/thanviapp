import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/Counterslice';
import TodoReducer from '../features/Todolist/Todolistslice';
export const store = configureStore({

    reducer:{
        counter:counterReducer,
        Todos:TodoReducer,

    }

})