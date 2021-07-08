import React from 'react'
class Contact extends React.Component {
    constructor(){
        super();
        this.state={
            uname:'',
            age:null,
            gender:''
        }
    }
    handleChange=(event)=>{
        console.log(event);
    /*    if(event.target.name==='uname')
        {
            this.setState({uname:event.target.value});
        }
        else{
            this.setState({age:event.target.value})
        }*/
        let n=event.target.name;  //uname,age
        let val=event.target.value; // john
        
         
        this.setState({[n]:val})
    }

    render() {
      return (
        <div>
            <form>
                <label>Name:</label>
                <input
                type="text"
                name="uname"
                onChange={this.handleChange}
                ></input>
                <label>Age:</label>
                <input
                type="text"
                name="age"
                onChange={this.handleChange}
                >
                </input>

                <div onChange={this.handleChange}>
                <input
                type="radio"
                value="Male"
                name="gender"/>Male
               
                <input
                type="radio"
                value="FeMale"
                name="gender"/>FeMale
                
                </div>
                

                
            </form>
          <h1>Hey !{this.state.uname} Your current age is {this.state.age} gender:{this.state.gender}</h1>
        </div>
      );
    }
  }
   
  export default Contact;