import React from 'react'
import CarouselModel from "../Carousel/Carousel";
import { useSelector } from "react-redux";

export default function Women() {
  // const design = useSelector((state) => state.DesignReducer);
  // console.log("design",design)
  const design=["https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/ef9bfb3a-9ab4-4ad3-87d9-0af2b093ed73.gif",
  "https://images-static.nykaa.com/uploads/c620335e-85dc-4bee-a0ee-02665668b794.gif?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3252ce59-13b6-4a92-b7a2-95f2402ce7e9.gif?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/85a8480c-5f90-4a8e-8c8c-4e6fc034d780.gif",
  "https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/1232de15-36f5-4939-a72f-3ee8306bec6e.jpg",
  "https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/86856eb5-a0f3-4f1f-b1fa-f2c3ec8b2acf.jpg"
  ]
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