import { render } from '@testing-library/react'
import React from 'react';
import Services from './Services'
import Contact from './Contact'
import { HashRouter,NavLink,Route } from 'react-router-dom';
class Home extends React.Component
{
    render()
    {
        return(

            <div>
                <h1>SPA</h1>
                <HashRouter>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Services">Serivces</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
                <div>
                <Route path='/Services' component={Services}></Route>
                <Route path='/Contact' component={Contact}></Route>
                </div>
                </HashRouter>
            </div>
        );
    }
}
export default Home;