//Todo State 
const intialState = {
    todos:["carwash","office rent","Houserent","Bus fee",]
}

function todoReducer(state=intialState,action){
    if (action.type==="ADDTODO"){
         return {...state,todo:[...state.todos,action.playload]}
    }
    return state;
    
}

export default todoReducer;


//logic