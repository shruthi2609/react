import React from 'react'
import { createStore } from 'redux' ;
function ReduxProj(){
//action
const increment=()=>{
    return{
        type:"INCREMENT"
    }
}
const decrement=()=>{
    return{
        type:"DECREMENT"
    }
}
//REDUCER
//const arr=[{count:0},{loggedIn:true}]
const counter=(arr,action)=>{
    switch(action.type){
        case "INCREMENT":
            return count+1
        case "DECREMENT":
            return count-1;
    }
}
//STORE
const store=createStore(counter)
store.subscribe(()=>console.log(store.getState()))
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
return(
    <div>
        <p>test</p>
    </div>
)
}
export default ReduxProj;


