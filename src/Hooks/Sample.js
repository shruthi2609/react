import React,{useState} from 'react'
function Sample(){
    //const[count,setCount]=useState(10);
    const[count1,setCount1]=useState(10)
    const[count2,setCount2]=useState(12)
    
    return(
        <div>
            <button onClick={()=>{
    setCount1(currentCount=>currentCount+1);
    setCount2(currentCount=>currentCount+1);
            }
            }>click</button>
            <p>{count1}</p>
            <p>{count2}</p>
        </div>
    )
}
export default Sample;