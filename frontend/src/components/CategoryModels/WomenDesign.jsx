import React from 'react'
import CarouselModel from "../Carousel/Carousel";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useNavigate } from "react-router-dom";

export default function Women() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);

  const design=["https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/ef9bfb3a-9ab4-4ad3-87d9-0af2b093ed73.gif",
  "https://images-static.nykaa.com/uploads/c620335e-85dc-4bee-a0ee-02665668b794.gif?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3252ce59-13b6-4a92-b7a2-95f2402ce7e9.gif?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/85a8480c-5f90-4a8e-8c8c-4e6fc034d780.gif",
  "https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/1232de15-36f5-4939-a72f-3ee8306bec6e.jpg",
  "https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/86856eb5-a0f3-4f1f-b1fa-f2c3ec8b2acf.jpg"
  ]
  const img = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/f1874a9d-c423-44d3-a529-6c63521d6f991650181498608-Sarees_Desk.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/1377cd42-3e4c-4cd7-ae0e-1719e81ff1db1650181498574-Formal-Footwear_Desk.jpg",
  ];

  const handleCategory=(x)=>{
    action.TypeAction({ url: "https://myntra-application.herokuapp.com/fashion" });
      nav(`/products/${x}`);
  }

  return (
    <div>
        <div style={{width:"100%", marginLeft:'300px', marginBottom:'20px'}}>
            <img src={design[0]} alt="" />
        </div>
      <CarouselModel img={img} />
      <br />
      <br />

      <div style={{ display: "flex" }}>
        <div onClick={()=>handleCategory('Jewellery')} style={{ height: "500px", width: "850px", marginRight: "20px" }}>
          <img
            height="100%"
            width="100%"
            src={design[1]}
            alt="slide1"
          />
        </div>
        <div onClick={()=>handleCategory('Flats-Heels')} style={{ height: "500px", width: "850px" }}>
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
