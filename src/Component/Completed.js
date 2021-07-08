import React from 'react';
class Completed extends React.Component
{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <h1>Completed List</h1>
                {
                     this.props.items.map(
                        (item)=>(
                          
                                <div className="rows">
                                    <div className="col-md-6">
                                    <div class="card" style={{backgroundColor:"grey"}}>
                                         <div class="card-body">
                                    <p >{item.title}</p>

                                         </div>
                                </div>
                                    </div>
                               
                                 </div>))
                                
                        
                    }
                </div>    
                     )
    


        
            
           
                   
        
    }
}
export default Completed;