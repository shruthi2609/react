import React from 'react';
import Pending from './Pending'
import Completed from './Completed'
let todos=[
    {
        "title":"Buy eggs",
        "status":true,
        "id":1,
        "deleted":false
    },
    {
        "title":"Buy sugar",
        "status":false,
        "id":2,
        "deleted":false
    },
    {
        "title":"Buy Rice",
        "status":true,
        "id":3,
        "deleted":false
    },
    {
        "title":"Buy Milk",
        "status":false,
        "id":4,
        "deleted":false
    }
]
class ToDo extends React.Component{
    constructor(){
        super()
        this.state={
           todos : todos
         
           //count:0
           
        }

    }
    getPendItem=()=>{
       const arr= this.state.todos.filter((todoitem)=>todoitem.status===false)
       return arr;
    }
    getCompItem=()=>
    {
        const arr= this.state.todos.filter((todoitem)=>todoitem.status===true)
       return arr;
    }
    changeCompleted=(todoId)=>{
      //  this.setState({count:this.state.count+0})
     // const temp=this.state.todos //shallow
     const temp=[...this.state.todos];
     console.log(temp);
     const todo=temp.find((i)=>i.id===todoId);

     todo.status=!todo.status;
     this.setState({todos:temp});
    }
    changeDeleted=(todoId)=>{
        //  this.setState({count:this.state.count+0})
       // const temp=this.state.todos //shallow
       const temp=[...this.state.todos];
       
       const todo=temp.find((i)=>i.id===todoId);
  
       todo.deleted=!todo.deleted;
       this.setState({todos:temp});
      }






    


    
   /* changeCompleted=(todoIt)=>{
        const temp=[...this.state.todos];
        const todo=temp.find((todo)=>todo.id===todoIt);
        todo.status=!todo.status;
        this.setState({todos:temp});
    }
    deletedItem=(todoIt)=>{
        const temp=[...this.state.todos];
        const todo=temp.find((todo)=>todo.id===todoIt);
        todo.deleted=true;
        this.setState({todos:temp});
    }*/
    render(){
        return(
            <div>
               
                <Pending fun1={this.changeCompleted} fun2={this.changeDeleted} items={this.getPendItem()}></Pending>
                <Completed items={this.getCompItem()}></Completed>
            </div>
        )
    }


}
export default ToDo;