//Counter state
const intialState = {
    count:0
}





//Counter Logic

function counterReducer(state=intialState,action){
    if(action.type==="INC"){
        return{count:state.count+1}
    }
    if(action.type==="DEC"){
        return{count:state.count-1}
    }
    if(action.type==="RESET"){
    return {count:intialState.count}
    }
    return state
}
export default counterReducer;