const Counter=(state=0,action)=>{
    switch(action.type){
        case "Increment":
            return state+1;
        case "decrement":
            return state-1;
        default:
            return state;
    }
}
export default Counter;