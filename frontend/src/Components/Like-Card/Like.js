import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import LikeCard from "./LikeCard";
import './Likecard.css';

const Like = () => {
  const { likelist } = useContext(GlobalContext);

  return (
    <>
        
    <div className="section" >
    <h1  className="like-heading">Liked Videos</h1>

    {likelist.length > 0 ? (
       <div className="like-container"  >
       {likelist.map((props)=>(
       <div  >
         
         <div className="col"
             
              >
            
            <LikeCard props={props} type="likelist" />
           
            </div>   
         
       
        </div>
       ))}

        
       </div>

    ): (
      <h2> No Videos Found</h2>
    )}
 
    </div>
    </>
   
  );
};

export default Like;
