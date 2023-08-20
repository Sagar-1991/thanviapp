import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    console.log("props in Counter",props)
  return (
    <div className='myBox'>
        <h1>Counter:{props.counterR.count}</h1>
        <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>&nbsp;&nbsp;&nbsp;
        <button>Decrement</button>&nbsp;&nbsp;&nbsp;
        </div>
  )
}

export default connect(function(store){return store})(Counter)