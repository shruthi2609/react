import React from 'react'
import DisplayItem  from './Display';
class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          items:[{text:""}],
          currentItem:{
            text:'',
            key:''
          }
        }
    }
    addTask=(e)=>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !==""){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem:{
            text:''
           
          }
        })
        console.log(items)
        }
        
       
      }
      handleChange=(event)=>{
        this.setState({
          currentItem:{
            text: event.target.value,
            
          }
        })
        console.log(this.state.currentItem.text);
      }
      render(){
        return (
          <div>
            
              <form  onSubmit={this.addTask}>
                <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleChange}></input>
                <button type="submit">ADD</button>
              </form>
            
              <p>task is{this.state.items.text}</p>
              <DisplayItem item={this.state.items}></DisplayItem>
              
               
          </div>
        );
       }

}
export default MainScreen;
