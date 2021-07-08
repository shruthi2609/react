import React,{useEffect, useState} from 'react'
function Sample2(){
    const initcount=0
    const[count,setCount]=useState(initcount);
    useEffect(() => {
document.title= `clicked ${count}`
    })
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>+ one</button>
            <button onClick={()=>setCount(initcount)}>reset</button>
        </div>
    )
}
export default Sample2;