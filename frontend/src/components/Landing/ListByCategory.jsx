import React from 'react'
import "./ListByCategory.css"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useNavigate } from "react-router-dom";

export default function ListByCategory() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const action = bindActionCreators(ActionCreators, dispatch);

    const handleCategory=(x)=>{
        action.TypeAction({ url: "https://myntra-application.herokuapp.com/fashion" });
          nav(`/products/${x}`);
    }

    

  return (
    <div>
         <div className='category-div'>
            <p>CATEGORIES TO BAG</p>
            <div className='category-div-flex'>
                <div onClick={()=>handleCategory('Kurta-Sets')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg" alt="kurta sets" /></div>
                <div onClick={()=>handleCategory('Bags')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg" alt="hand bags" /></div>
                <div onClick={()=>handleCategory('Kurti')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg" alt="kurti" /></div>
                <div onClick={()=>handleCategory('T-Shirt')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg" alt="t-shirts" /></div>
                <div onClick={()=>handleCategory('Saree')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg" alt="saree" /></div>
                <div onClick={()=>handleCategory('Shirt')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg" alt="shirts" /></div>
                <div onClick={()=>handleCategory('Jewellery')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg" alt="jewellery" /></div>
                <div onClick={()=>handleCategory('Jeans')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg" alt="jeans" /></div>
                <div onClick={()=>handleCategory('Watch')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg" alt="watch" /></div>
                <div onClick={()=>handleCategory('Flip-Flops')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg" alt="flip-flops" /></div>
                <div onClick={()=>handleCategory('Shorts')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg" alt="shorts" /></div>
                <div onClick={()=>handleCategory('Kids-Ethnic-Wear')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg" alt="dresses" /></div>
                <div onClick={()=>handleCategory('Formal-Shoes')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg" alt="shoes" /></div>
                <div onClick={()=>handleCategory('Girl')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg" alt="girl" /></div>
            </div>
        </div>
    </div>
  )
}
