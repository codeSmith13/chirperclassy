import React from "react";

let OneChirp = (props) => {
    
    
  return (
    <>
      <div className="container  ">
        <div className="row col-12  justify-content-center">
          <div className="card col-4 m-1 mt-4 bg-primary">
            <div className="card-body  bg-dark ">
              <div className="list-group list-group-flush ">
                <div className="list-group-item bg-dark ">
                  <h5 className="card-title text-white text-center ">
                    {props.chirp.name}
                  </h5>
                </div>
                <div className="list-group-item text-white bg-dark ">
                  {props.chirp.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  };


export default OneChirp;