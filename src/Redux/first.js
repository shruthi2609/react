import React from 'react'
import { createStore } from 'redux'
function First(){
//action
const increment=()=>{
    return{
        type:"increment"
    }
}
//reducer
const counter=(state=0,action)=>{
    switch(action.type){
        case "increment":
            return state+1;
    }

}
//store
const store=createStore(counter)
store.subscribe(()=>console.log(store.getState())
)
store.dispatch(increment())
return(
    <div>
        <p>test</p>
    </div>
)}
export default First;
