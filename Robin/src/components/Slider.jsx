import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/revimages/homepage01-slide1.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "700px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/revimages/homepage03-slide2.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "700px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/revimages/homepage05-slide2.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "700px" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ backgroundColor: "black" }}
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ backgroundColor: "black" }}
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Slider;
