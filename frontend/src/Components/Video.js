import React from 'react'
import { useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'


const Video = () => {
  



const location = useLocation()
const state = location.state.data;
 console.log(location)


 
   
   
  return (
    <div className='container' >
        <div
          className="card" 
          style={{ height: "500px", "width":"100%" }}
        >
    
              
              <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; 
              encrypted-media; gyroscope; picture-in-picture; web-share" title="PHOTOGRAPHY BASICS in 10 MINUTES"
               width="100%" height="100%" src={state.vidid}
            ></iframe>
    
          <div className="card-body">
            <h5 className="card-title">{state.name}</h5>
            <p className="card-text"> {state.desc} </p>
            
          </div>
        </div>
   
    </div>
  )
}

export default Video
