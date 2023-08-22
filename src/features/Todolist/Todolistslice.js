const initialState ={
    todos:[ 'get phone','readpaper','migrate noodles']

}
var todoSlice = createSlice({
    name:'todoR',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todo.pushaction.payload()
        }
    }
})
export var  {addTodo} = todoSlice.action;
export default todoSlice.reducer;