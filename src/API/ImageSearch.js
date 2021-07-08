import React from 'react';
import axios from 'axios';

class ImageSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            images:[],
            isLoading:true,
            serach:"",
            

        }
    }
    
    getImage=(query)=>
        {
            const url="https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&page=1&query="+query
            axios.get(url)
            .then((res)=>{
                console.log(res)
                this.setState({images:res.data.results,isLoading:false})
            })
            .catch((error)=>console.log(error))
            console.log(query)
        
        }
    handleSearch=(event)=>{
        event.preventDefault()
        this.getImage(this.state.serach)
    }
    handleChange=(event)=>
    {
        this.setState({serach:event.target.value})
    }

render(){
    return(
        <div>
            <p>start fetching ...</p>
            <form onSubmit={this.handleSearch}>
            <input type="text" onChange={this.handleChange}></input>
            <input type="submit" value="search"></input>
            </form>
            {this.state.isLoading?(<p>Loading.....</p>):
            (this.state.images.map(
                (image)=>(
                    <img src={image.urls.small} alt={image.urls.thumb}></img>  
                )
                 
                
            ))}
        </div>
    );
}
}
export default ImageSearch;
