import React from 'react'
import "./ListByCategory.css"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useNavigate } from "react-router-dom";

export default function ListByBrand() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const action = bindActionCreators(ActionCreators, dispatch);

     const handleBrand=(x)=>{
        action.BrandAction({url:'http://localhost:3002/fashion'})
        nav(`/products/${x}`)
    }

  return (
    <div className='category-div'>
        <div>
            <p>DEALS ON TOP BRANDS</p>
            <div className='category-div-flex'>
                <div onClick={()=>handleBrand('Libas')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg" alt="Libas" /></div>
                <div onClick={()=>handleBrand('W')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg" alt="W" /></div>
                <div onClick={()=>handleBrand('Puma')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg" alt="Puma" /></div>
                <div onClick={()=>handleBrand('DressBerry')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/697bb8c0-5c99-4d02-b0f9-d46ca72889db1602086685082-dressberrywomen.jpg" alt="DressBerry" /></div>
                <div onClick={()=>handleBrand('POLO')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg" alt="POLO" /></div>
                <div onClick={()=>handleBrand('ONLY')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg" alt="only" /></div>
                <div onClick={()=>handleBrand('WROGN')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg" alt="Wrogn" /></div>
                <div onClick={()=>handleBrand('Biba')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg" alt="Biba" /></div>
                <div onClick={()=>handleBrand('HRx')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/0390ad1a-1262-4f7a-8f81-37c1644142a91598445950839-Sports---HRX-by-Hrithik-Roshan.png" alt="HRx" /></div>
                <div onClick={()=>handleBrand('Anouk')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/28/529db52b-ba58-423a-9ad6-3161ef642dff1598605975128-Women-s-Ethnic-Wear---Anouk.png" alt="Anouk" /></div>
                <div onClick={()=>handleBrand('Crocs')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg" alt="Crocs" /></div>
                <div onClick={()=>handleBrand('CuteCumber')}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c8f8c028-21c6-4b65-9d77-188378312e561598892141092-Cutecumber.jpg" alt="cuteCumber" /></div>
            </div>
        </div>
    </div>
  )
}
