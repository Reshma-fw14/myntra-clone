import React from "react";
import {Carousel} from 'react-bootstrap'

export default function kurtiSlideShow() {
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-topbannercarousel-p5-brands-4070.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p4-brands-min50.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p3-brands-upto70.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-women-p4-indiepicks-4075.jpg
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-women-p2-footwear-accessories-4070.jpg
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p3-brands-upto70.jpg //men
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p4-brands-min50.jpg //men
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ourexclusivebrands-kidswear.jpg  //kids
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ethnicwear-bestofethnicwear.jpg  //saaree
// https://assets.ajio.com/cms/AJIO/WEB/3D.jpg  slipper
// https://assets.ajio.com/cms/AJIO/WEB/4D.jpg  //jewellery
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ourexclusivebrands-footwear.jpg  //shoes
// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-discoveronlinestores-topbanner.jpg // slipper
// https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-topbannercarousel-p5-brands-4070.jpg //gap
