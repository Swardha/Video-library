import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { NavLink } from "react-router-dom";

const Card = (props) => {
// const Card = ({props}) => {

  const { addVideoToLikelist } = useContext(GlobalContext);



  const [data, setData] = useState([]);

  const load = () => {
    setData(props);
    console.log(props)
  };

 

  useEffect(() => {
    load();
  });

  return (
    <div>
      
        <div
          className="card m-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
            <NavLink to="/video" state={{ data: data}}>
          <div className="ratio ratio-16x9">
         
            <iframe
              src={props.vidid}
              title="YouTube video"
              asllowfullscreen
            ></iframe>

            {/* <iframe width="853" height="480" src="https://www.youtube.com/embed/RV0iNoEGnz0" title="Palak Paneer Recipe | How To Make Easy Palak Paneer | Cottage Cheese In Spinach Gravy | Varun" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}


          </div>  
          </NavLink>
          <div className="card-body">
            {/* <h1>{props.vkey} </h1> */}
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-title">{props.channel}</h6>
            <p className="card-text"> {props.desc} </p>
            <button
              type="button"
              className="btn ctrl-btn"
              onClick={() => addVideoToLikelist(props)}
          
            >
            <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        
        </div>
 
    </div>
  );
};

export default Card;
