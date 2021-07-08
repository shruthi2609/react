import React,{useState} from 'react'
function List(){
    const[ls]=useState([
        {title:"buy eggs",id:1},
        {title:"buy milk",id:2},
    ]
        
    )
    return(
        <div>
            <ul>
                {ls.map(item=>{
                    return(<li key={item.id}>{item.title}</li>)
                })}
            </ul>
        </div>
    )
}
export default List;