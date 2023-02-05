import React from 'react'
import { VideoButtons } from '../VideoButtons'
import '../Like-Card/Likecard.css';

const LikeCard = ({props, type}) => {
  console.log(props)
  return (
    <div  className='card-layout'  >
       <div className="ratio ratio-16x9" >
       <img src= {props.thumbnail} alt="img" />
              </div>

              <div className="card-body m-2 p-2 ">
                {/* <h2>{props.vkey} </h2> */}
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-title">{props.channel}</h6>
                <p className="card-text"> {props.desc} </p>
             
              </div>
              <div className='m-2'>
              <VideoButtons type={type} props={props} />
              </div>

              
    </div>
  )
}

export default LikeCard
