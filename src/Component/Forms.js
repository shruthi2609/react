import React from 'react'
class Forms extends React.Component{
    constructor(){
        super()
        this.state={uname:'',
    age:null,gender:'',
    car:'Volvo'
}
    }
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        //this.setState({uname: event.target.value});
      }
    render(){
        return(
            <div>
                <form>
                    <input
                    type="text"
                    name="uname"
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="age"
                    onChange={this.handleChange}
                    />
                    <div onChange={this.handleChange}>
                    <input type="radio" value="Male" name="gender" /> Male
                     <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                    </div>
                    <div onChange={this.handleChange}>
                    <input type="checkbox" value="green" name="clr1" /> green
                     <input type="checkbox" value="blue" name="clr2" /> blue
                    <input type="checkbox" value="blacck" name="clr2" /> white
                    </div>
                    <select  value={this.state.car} onChange={this.handleChange}>
            <option value="Ford" >Ford</option>
            <option value="Volvo">Volvo</option>
         <option value="Fiat">Fiat</option>
         </select>
                    

                    
                        <h1>Hello ! {this.state.uname}{this.state.age}{this.state.gender}{this.state.clr1}{this.state.car}</h1>
                    
                </form>
            </div>
        )
    }
}
export default Forms;