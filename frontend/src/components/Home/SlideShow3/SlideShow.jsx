import React from "react";
import {Carousel} from 'react-bootstrap'

export default function SlideShow3() {
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ourexclusivebrands-kidswear.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-KHP-topbanner-ajiomaniaprebuzz.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/11052022-D-KHP-banner1-p1-brands-min40.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// https://images-static.nykaa.com/uploads/5374380c-abba-47eb-8bfa-c3bc54f10bd5.jpg