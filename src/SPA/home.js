import React from 'react'
import {HashRouter,NavLink,Route} from 'react-router-dom';
import Home from './Welcome';
import Contact from './Contact';
class HomePage extends React.Component{
    render() {
        return (
            <div>
              <h1>Simple SPA</h1>
              <HashRouter>
              <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Home">Stuff</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
              </ul>
             
              
              <div className="content">
                <Route path="/Home" component={Home}/>
                <Route path="/Contact" component={Contact}/>
                
              </div>
              </HashRouter>
            </div>
            
        );
      }
    }
     
    export default HomePage;
