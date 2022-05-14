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
        <h1>Best of Brands</h1>
        <CarouselModel img={img}/><br /><br />
        <h1>Jewellery and Heels top Pics</h1>
        <CarouselModel img={jewellery}/><br /><br />
        <div className='animation' style={{marginLeft:'250px'}}>
           <img src="https://images-static.nykaa.com/uploads/tr:w-1200,/96082820-e43d-4c31-a63e-a0a525c2cb9b.gif" alt="" />
        </div>
        <ModelScrollX data={props.kurti} />
        <ModelScrollX data={props.shirt} /><br /><br />
        <h1>Top picks for your Kids</h1>
        <CarouselModel img={girlDresses} />
        <ModelScrollX data={props.girlDress} />
    </div>
  )
}
