import React from 'react'
import CarouselModel from "../Carousel/Carousel";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useNavigate } from "react-router-dom";

export default function MenDesign() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const action = bindActionCreators(ActionCreators, dispatch);

    const img = [
        "https://images-static.nykaa.com/uploads/tr:w-3038,/a0f56c8f-3e9f-4468-9bd7-f49dd3e7598e.jpg",
        "https://images-static.nykaa.com/uploads/tr:w-3038,/0347e83c-9504-4a00-a6eb-f891c4cd4c3a.jpg",
        "https://images-static.nykaa.com/uploads/tr:w-3038,/02e94e0e-bea5-4aca-af7b-2ef62fc4c15d.jpg",
      ];
    
      const handleCategory=(x)=>{
        action.TypeAction({ url: "https://myntra-application.herokuapp.com/fashion" });
          nav(`/products/${x}`);
      }

  return (
    <div>
        <div onClick={()=>handleCategory('Jeans')} style={{width:'100%'}}>
            <img style={{width:'100%'}} src="https://images-static.nykaa.com/uploads/tr:w-3038,/754b9259-3364-4f03-9539-d587fce108af.gif" alt="" />
        </div>
        <br />
        <CarouselModel img={img}/><br />
        <div onClick={()=>handleCategory('T-Shirt')} style={{width:'100%'}}>
            <img style={{width:'100%'}} src="https://images-static.nykaa.com/uploads/tr:w-3038,/4ae7cb10-f057-4e01-9b41-5775c0a0830e.gif" alt="" />
        </div>
        <div onClick={()=>handleCategory('Watch')} style={{margin:'10px 300px'}}>
            <img src="https://images-static.nykaa.com/uploads/tr:w-1200,/893abae3-d385-4199-9a49-735a7f59d8aa.jpg" alt="" />
        </div>
    </div>
  )
}
