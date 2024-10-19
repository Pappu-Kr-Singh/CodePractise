import React from "react";
import "./style.css";

function Rip() {
  return (
    <>
      <div className="container mt-5">
        <div className="card bg-dark text-light p-4">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://images.findagrave.com/photos/2022/211/1075_2e6825ad-43c5-41a5-a9c8-98259092e3b4.webp?size=photos250"
                alt="George Washington"
                className="img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h1 className="card-title">George Washington</h1>
              <div className="card-body">
                <p>
                  <strong>Birth:</strong> 22 Feb 1732
                </p>
                <p>
                  <strong>Location:</strong> Colonial Beach, Westmoreland
                  County, Virginia, USA
                </p>
                <p>
                  <strong>Death:</strong> 14 Dec 1799 (aged 67)
                </p>
                <p>
                  <strong>Location:</strong> Mount Vernon, Fairfax County,
                  Virginia, USA
                </p>
                <p>
                  <strong>Burial:</strong>{" "}
                  <a href="#" className="text-decoration-none">
                    Mount Vernon Estate
                  </a>
                </p>
                <p>
                  <strong>Plot:</strong> Mount Vernon, New Tomb
                </p>
                <p>
                  <strong>Memorial ID:</strong> 1075 •{" "}
                  <a href="#" className="text-decoration-none">
                    View Source
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-500" style={{ marginTop: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-end">Photos</div>
            <div className="col-md-6">Flowers</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rip;
