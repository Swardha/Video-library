import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import LikeCard from "./LikeCard";

const Like = () => {
  const { likelist } = useContext(GlobalContext);

  return (
    <div >
     <h1>Liked Videos</h1>
    
    {likelist.length > 0 ? (
       <div className="container"  >
       {likelist.map((props)=>(
          <div className="row mb-2">
         
         <div 
              className="col-12 col-md-6 col-lg-3 "
              style={{ width: "18rem", maxHeight: "360px" }} >
            
            <LikeCard props={props} type="likelist" />
           
            </div>
      
       
        </div>
       ))}

        
       </div>

    ): (
      <h2> No Videos Found</h2>
    )}
 
    </div>
   
  );
};

export default Like;
