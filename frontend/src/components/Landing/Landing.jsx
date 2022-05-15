import React from 'react'
import CarouselModel from '../Carousel/Carousel'
import ModelScrollX from '../Model/LandingModel'

export default function Landing() {
    let props={
        kurti:{
            url:"http://localhost:3002/fashion",
            type:"Kurti",
            limit:5,
        },
        shirt:{
            url:"http://localhost:3002/fashion",
            type:"Shirt",
            limit:5,
        },
        girlDress:{
            url:"http://localhost:3002/fashion",
            type:"Girl",
            limit:5,
        }
    }

    const img=["https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-topbannercarousel-p5-brands-4070.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p4-brands-min50.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/11052022-D-unisex-banner1-men-p3-brands-upto70.jpg"
            ];

    const jewellery=["https://images-static.nykaa.com/uploads/5374380c-abba-47eb-8bfa-c3bc54f10bd5.jpg",
                    "https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-discoveronlinestores-topbanner.jpg",
                    "https://images-static.nykaa.com/uploads/3a521f40-6b1c-4048-b6fb-766c0ef6be43.jpg"
                ];

   const girlDresses=[ "https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ourexclusivebrands-kidswear.jpg",
                        "https://assets.ajio.com/cms/AJIO/WEB/10052022-D-KHP-topbanner-ajiomaniaprebuzz.jpg",
                        "https://assets.ajio.com/cms/AJIO/WEB/11052022-D-KHP-banner1-p1-brands-min40.jpg"
                    ]

  return (
    <div>
        <CarouselModel img={img}/><br /><br />
        <div style={{width:'100%'}}>
            <img style={{width:'100%'}} src="https://images-static.nykaa.com/uploads/tr:w-3038,/b683cab1-d890-4e53-a697-be7801aeb84b.gif" alt="" />
        </div><br />
        <CarouselModel img={jewellery}/><br /><br />
        <div className='animation' style={{marginLeft:'280px'}}>
           <img src="https://images-static.nykaa.com/uploads/tr:w-1200,/96082820-e43d-4c31-a63e-a0a525c2cb9b.gif" alt="" />
        </div><br />
        <div style={{marginLeft:"300px", marginBottom:'20px'}}>
            <img src="https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/5103ed09-07ea-4c14-b7d4-861749480d72.jpg" alt="" />
        </div>
        <div style={{display:'flex',width:'85%', margin:'auto'}}>
            <div style={{width:'33%'}}><img style={{width:'95%'}} src="https://images-static.nykaa.com/uploads/tr:w-384,e-sharpen,/0a487af9-a6e2-4773-bf75-eec459c2cd1c.jpg" alt="" /></div>
            <div style={{width:'33%'}}><img style={{width:'95%'}} src="https://images-static.nykaa.com/uploads/tr:w-384,e-sharpen,/4d9b3f16-d909-4e8f-ae40-0650087bddd3.jpg" alt="" /></div>
            <div style={{width:'33%'}}><img style={{width:'95%'}} src="https://images-static.nykaa.com/uploads/tr:w-384,e-sharpen,/efa47ccf-939f-407f-b1fc-2f6cd4788613.jpg" alt="" /></div>
        </div>
        <div>
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/ba07b5b3-ad1f-4800-8968-4b1bc000be191651897264745-Budget-Buys.jpg" alt="" />
        </div>
        <ModelScrollX data={props.kurti} /><br />
        <div style={{width:'100%'}}>
            <img style={{width:'100%'}} src="https://images-static.nykaa.com/uploads/tr:w-3038,/8e0bb6da-144e-4417-b276-b8c8ce240a41.jpg" alt="" />
        </div>
        <div style={{width:'100%'}}>
            <img style={{width:'100%'}} src="https://images-static.nykaa.com/uploads/tr:w-1200,/b4413015-6a49-4139-abb8-d26d068270b7.gif" alt="" />
        </div>
        <ModelScrollX data={props.shirt} /><br /><br />
        <div style={{width:'100%'}}>
            <img style={{width:'100%'}} src="https://images-static.nykaa.com/uploads/tr:w-1200,/af0db7d8-01cf-4cc4-bce9-a431c1e65790.gif" alt="" />
        </div><br />
        <CarouselModel img={girlDresses} /><br />
        <div style={{display:'flex',width:'85%', margin:'auto'}}>
            <div style={{width:'33%'}}><img style={{width:'95%'}} src="https://images-static.nykaa.com/uploads/tr:w-384,/04cba899-6689-401f-a0cd-54d191945ae9.jpg" alt="" /></div>
            <div style={{width:'33%'}}><img style={{width:'95%'}} src="https://images-static.nykaa.com/uploads/tr:w-384,/d22210f2-a04a-4577-81ac-b6c73ff6f0f8.jpg" alt="" /></div>
            <div style={{width:'33%'}}><img style={{width:'95%'}} src="https://images-static.nykaa.com/uploads/tr:w-384,/b8f68887-5830-40b8-bc8d-87e497aaec7c.jpg" alt="" /></div>
        </div>
        <ModelScrollX data={props.girlDress} />
    </div>
  )
}
