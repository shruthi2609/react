import React from 'react'
import Todo from '../Component/Todo'
class ClockTick extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()} // 7.00.00
    }
    componentDidMount(){
        setInterval(
            ()=>this.tick(),1000
        )
    }
    tick(){
        this.setState({date:new Date()})
    }
    render(){
        return(
            <div>
                {
                    (this.state.date.toLocaleTimeString()<='7:46:10')?

                    <h1>{this.state.date.toLocaleTimeString()}</h1>:
                    <Todo></Todo>
                }
                
            </div>
        )
    }
}
export default ClockTick;