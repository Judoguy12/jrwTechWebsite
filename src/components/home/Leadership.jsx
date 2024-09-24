import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-3 fw-bold pb-2 text-center">{heading}</h2>
      <div className="row">
        <div className="text-center display-3">
          <p className="lead">{message}</p>
        </div>
        <div className="p-2">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt={`Slide ${index}`}
                    style={{
                      width: "100%",
                      height: "400px",  // Reduced height,
                      objectFit: "cover" // Ensures the image covers the area while maintaining aspect ratio
                    }}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
