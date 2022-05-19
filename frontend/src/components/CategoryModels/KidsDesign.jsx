import React from 'react'
import CarouselModel from "../Carousel/Carousel"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useNavigate } from "react-router-dom";

export default function KidsDesign() {
  const nav = useNavigate();
    const dispatch = useDispatch();
    const action = bindActionCreators(ActionCreators, dispatch);

    const img = [
        "https://images-static.nykaa.com/uploads/tr:w-3038,/e74fcde5-e94f-46d0-9d76-f5891407d25a.jpg",
        "https://images-static.nykaa.com/uploads/tr:w-3038,/211990aa-406d-4d49-a6ad-cfc4bfef5527.jpg",
        "https://images-static.nykaa.com/uploads/tr:w-3038,/70859a88-d8eb-453e-8081-b7ea4aaf49da.jpg",
      ];

      const handleCategory=(x)=>{
        action.TypeAction({ url: "http://localhost:4000/fashion" });
          nav(`/products/${x}`);
      }

  return (
    <div>
        <CarouselModel img={img}/><br />
        <div style={{width:'100%'}}>
            <img style={{width:'100%'}} src="https://images-static.nykaa.com/uploads/tr:w-3038,/9663d093-8851-4088-ba92-1281f03aec15.gif" alt="" />
        </div>
        <div style={{width:'70%', margin:'auto'}}>
             <img src="https://images-static.nykaa.com/uploads/tr:w-1200,/508599d3-7dad-44b6-82c5-3bf5fd8fa00b.jpg" alt="" />
            <img src="https://images-static.nykaa.com/uploads/tr:w-1200,/3eb80a75-a0fc-48a7-8e59-568d207b3c24.jpg" alt="" />
        </div><br />
        <div onClick={()=>handleCategory('Girl')} style={{width:'100%'}}>
          <img style={{width:'100%'}} src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/fermion/images/category_slider/img/tr:w-3038,/Lilpicks.desktop.jpg?rnd=20200526195200" alt="" />
        </div>
    </div>
  )
}
