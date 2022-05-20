import React from "react";
import {Carousel} from 'react-bootstrap'

export default function CarouselModel(img) {
    // console.log("img:",img.img)
    
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img.img[0]}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img.img[1]}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img.img[2]}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}