import counterReducer from "./Reducers/CounterReducer";
import todoReducer from "./Reducers/To-do reducer";
import {createStore,combineReducers} from 'redux';
var store = createStore(combineReducers({counterR:counterReducer,todosR:todoReducer}))
export default store;
 