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
                      height: "auto",  // Let the height adjust based on width
                      maxHeight: "1000px", // Optional: Limit the max height for a compact layout
                      objectFit: "contain", // Scale images to fit within the container while maintaining aspect ratio
                    }}
                  />
                  <Carousel.Caption>
                    <h3 className="fs-5"
                      style={{
                        textShadow: `
                          -1px -1px 0 #000, 
                           1px -1px 0 #000, 
                          -1px  1px 0 #000, 
                           1px  1px 0 #000`,
                      }} // Adds a black outline effect to the label (h3)
                    >
                      {value.label}
                    </h3>
                    <p
                      style={{
                        textShadow: `
                          -1px -1px 0 #000, 
                           1px -1px 0 #000, 
                          -1px  1px 0 #000, 
                           1px  1px 0 #000`,
                      }} // Adds a black outline effect to the caption paragraph
                    >
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
