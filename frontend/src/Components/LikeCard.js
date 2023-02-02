import React from 'react'
import { VideoButtons } from './VideoButtons'

const LikeCard = ({props, type}) => {
  return (
    <div >
       <div className="ratio ratio-16x9" >
                <iframe
                  src={props.vidid}
                  title="YouTube video"
                  asllowfullscreen
                ></iframe>
              </div>

              <div className="card-body ">
                {/* <h2>{props.vkey} </h2> */}
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"> {props.desc} </p>
             
              </div>

              <VideoButtons type={type} props={props} />
    </div>
  )
}

export default LikeCard
