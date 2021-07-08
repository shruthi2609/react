import React from 'react'
//import ToDo from './Component/Todo'
//import HomePage from './SPA/home';
//import ClockTick from './Timer/ClockTick'
//import Forms from './Component/Forms'
//import MainScreen from './ToDo/Entry'
//import Home from './SPA1/Home'
//import Sample2 from './Hooks/Sample2'
//import ImageAPI from './API/ImageApi'
//import Effect from './Hook/Effect'
//import ReduxProj from './Redux/ReduxProj'
//import ImageSearch  from './API/ImageSearch';
import {increment,decrement} from './Actions/Action'
import {useSelector,useDispatch} from 'react-redux'
function App() {
  const mycounter=useSelector(state=>state.Counter);
  const logged=useSelector(state=>state.loggedReducer);
  const dispatch=useDispatch()
  return (
    <div>
      <h1>count:{mycounter}</h1>
      <button onClick={()=>dispatch(increment())}
      >+</button>
      <button onClick={()=>dispatch(decrement())}
      >-</button>
      {logged?<h3>you are logged in</h3>:<h3>you are logged out</h3>}
     </div>

  );
}
export default App;
