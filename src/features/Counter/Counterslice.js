import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    count:0
}
var counterSlice = createSlice({
    name : "counterR",
    initialState,
    reducers:{
         increment:(state)=>{
            state.count++;

         },
         decrement:(state)=>{
            state.count--;
         }

    }   
})
export var {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;