import React from "react";

function Home() {
  return (
    <>
      <div className="container pt-5">
        <div className="row ">
          <div className="col-md-6 my-auto" style={{}}>
            <h1>
              <b>
                {" "}
                Welcome to <br />
                LifeBahn Heaven
              </b>
            </h1>
            <h5>Perpatual Memoriam for your loved ones.</h5>
          </div>
          <div className="col-md-6">
            <img
              src="https://lifebahn.net/documents/d/lifebahnheaven/tree-png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
