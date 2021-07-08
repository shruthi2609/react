import axios from 'axios'
import React from 'react'
class ImageAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            images:[],
            loading:true,
            searchitem:""
        }
    }
    callUnsplash=(input)=>
    {
        const url="https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&page=1&query="+input
        console.log(url)
        axios.get(url).then((res)=>{
            console.log(res)
            this.setState({images:res.data.results,loading:false})
        }
        ).catch((err)=>console.log(err))
    }
    handleSearch=(event)=>{
        event.preventDefault()
        this.callUnsplash(this.state.searchitem)
    }
    handleChange=(event)=>{
        this.setState({searchitem:event.target.value})

    }
    render(){
        return(
            <div>
                <p>Image api</p>
                <form onSubmit={this.handleSearch}>
                    <input type="text" onChange={this.handleChange}></input>
                    <input type="submit" value="search"></input>
                </form>
               {this.state.loading?(<p>Loading...</p>):
                (
                this.state.images.map((image)=>(
                    <img src={image.urls.small} alt={image.urls.thumb}></img>
                )

                )
                )
    }
                
                
            </div>
        )
    }
   

}
export default ImageAPI;