import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import '../Card/StyleCard.css';
import { NavLink } from "react-router-dom";

const Card = (props) => {
  console.log(props)
// const Card = ({props}) => {

  const { addVideoToLikelist, likelist } = useContext(GlobalContext);
const storevideo = likelist.find(o => o.vkey === props.vkey);

const disable = storevideo? true
: false;

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
      
        <div className="card">
            <NavLink to="/video" state={{ data: data}}>
            <div  className='card-layout' >
          <div className="ratio ratio-16x9  w-100">
            <img src= {props.thumbnail} alt="img" />
            </div>  
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
              disabled={disable}
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
