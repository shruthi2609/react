import React,{useState,useEffect} from 'react'
function Effect(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`you have clicked ${count}`;
    })
    return(
        <div>
            <button onClick={()=>setCount(count+1)}></button>
        </div>
    )
} 
export default Effect;