import React,{useState} from 'react';
function Counter(){
    const initvalue=0;
    const[count,updateCount]=useState(initvalue)
    
    return(
        <div>
            <p>the count is :{count}</p>
            <button onClick={
            ()=>{
                updateCount(count=>count+1)
            }
            }>+</button>
            <button onClick={
            ()=>{
                updateCount(count=>count-1)
            }
            }>-</button>
            <button onClick={
            ()=>{
                updateCount(initvalue)
            }
            }>reset</button>
        </div>
    )
}
export default Counter;




