import React from 'react'
import { useLocation} from 'react-router-dom'



const Video = () => {
  



const location = useLocation()
const state = location.state.data;
 console.log(location)


 
   
   
  return (
    <div className='container' >
        <div
          className="card m-3" 
          style={{ height: "500px" }}
        >
          
            <iframe   style={{ height: "500px" }}
                  controls
                  playing={true}
              src={state.vidid}
              title="YouTube video"
              
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
