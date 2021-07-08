const loggedReducer=(state=false,action)=>{
    switch(action.type){
        case "sign-in":
            return true;
        default:
            return state;
    }
}
export default loggedReducer;