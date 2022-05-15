import React from 'react'
import CarouselModel from "../Carousel/Carousel";
import { useSelector } from "react-redux";

export default function Women() {
  const design = useSelector((state) => state.DesignReducer);
  console.log("design",design)
  const img = [
    "https://images-static.nykaa.com/uploads/tr:w-3038,/5eecfbad-151b-4044-b65c-27fdaa1779a1.gif",
    "https://images-static.nykaa.com/uploads/tr:w-3038,/50adcd25-6854-4168-bc80-81cf5f62f7ed.jpg",
    "https://images-static.nykaa.com/uploads/tr:w-3038,/859ddead-9901-4af8-8d3b-f462f0389f2f.jpg",
  ];
  return (
    <div>
        <div style={{width:"100%", marginLeft:'300px', marginBottom:'20px'}}>
            <img src={design[0]} alt="" />
        </div>
      <CarouselModel img={img} />
      <br />
      <br />

      <div style={{ display: "flex" }}>
        <div style={{ height: "500px", width: "850px", marginRight: "20px" }}>
          <img
            height="100%"
            width="100%"
            src={design[1]}
            alt="slide1"
          />
        </div>
        <div style={{ height: "500px", width: "850px" }}>
          <img
            height="100%"
            width="100%"
            src={design[2]}
            alt="slide2"
          />
        </div>
      </div>
      <br />
      <br />

      <div>
        <div style={{ marginLeft: "240px" }}>
          <img
            width="1290px"
            src={design[3]}
            alt=""
          />
        </div>
        <div style={{ display: "flex", margin: "20px 240px" }}>
          <div style={{ marginRight: "10px" }}>
            <img
              src={design[4]}
              alt=""
            />
          </div>
          <div>
            <img
              src={design[5]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
