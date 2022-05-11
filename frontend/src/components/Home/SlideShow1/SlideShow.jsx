import React from "react";
import {Carousel} from 'react-bootstrap'

export default function SlideShow1() {
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-topbannercarousel-p5-brands-4070.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p4-brands-min50.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p3-brands-upto70.jpg"
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

// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-women-p4-indiepicks-4075.jpg
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-women-p2-footwear-accessories-4070.jpg
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p3-brands-upto70.jpg
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p4-brands-min50.jpg
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ourexclusivebrands-kidswear.jpg
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ethnicwear-bestofethnicwear.jpg
// https://assets.ajio.com/cms/AJIO/WEB/3D.jpg
// https://assets.ajio.com/cms/AJIO/WEB/4D.jpg
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ourexclusivebrands-footwear.jpg
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-discoveronlinestores-topbanner.jpg
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-topbannercarousel-p5-brands-4070.jpg
