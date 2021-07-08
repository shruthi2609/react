import React from 'react';
import './mystyle.css';
class Pending extends React.Component
{
    constructor(props){
        super(props)

    }
    render(){
        return(
            
            <div>
                <h1>Pending list</h1>
                {
                     this.props.items.map(
                        (item)=>(
                          (item.deleted===false)?
                               ( <div className="rows">
                                    <div className="col-md-6">
                                    <div className="card">
                                    <div className="card-body  clr" >
                                    <p >{item.title}</p>
                                    <button onClick={()=>this.props.fun1(item.id)}>Done</button>
                                    <button onClick={()=>this.props.fun2(item.id)}>Delete</button>
                                   
                                </div>
                                </div>
                                </div> 
                                 </div>):<></>
                                 ))
                                
                        
                    }
                </div>    
                     )
    


        
            
           
                   
        
    }
}
export default Pending;