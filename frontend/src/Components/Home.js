import React, { useEffect, useState } from "react";

import Card from "./Card";




const Home = () => {
  const [videoCat, setVideoCat] = useState([]);
  const [videoItems, setVideoItems] = useState([]);

  const loadData = async () => {
    let result = await fetch("http://localhost:5000/videoData", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    // console.log(result[0], result[1]);
    setVideoItems(result[0]);
    setVideoCat(result[1]);
    console.log(result[0])
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container">
        {videoCat !== [] ? (
          videoCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {" "}
                  {data.CategoryName}{" "}
                </div>
                <hr />

                {videoItems !== [] ? (
                  videoItems
                    .filter((items) => items.CategoryName === data.CategoryName)
                    .map((filterItems) => {
                      return (
                       
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >


                          <Card vkey={filterItems._id}
                           name={filterItems.Name}
                          vidid={filterItems.Videoid}
                            desc={filterItems.description}
                            channel={filterItems.channelName}
                          />
                         
                        
                      
                       
                        </div>
                      );
                    })
                ) : (
                  <div>no such data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>no data </div>
        )}

        {/* <Card/> */}
      </div>
    </>
  );
};

export default Home;
