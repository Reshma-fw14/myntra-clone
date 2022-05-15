import React from "react";
import {Link} from "react-router-dom"
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Women from "../CatModels/Design";

const women=[{key:"Kurta-Sets",image:"https://images-static.nykaa.com/uploads/tr:w-220.8,/a3847fe4-e42b-4761-b4e8-0966c08ae89c.jpg"},
{key:"Kurti",image:"https://images-static.nykaa.com/uploads/tr:w-220.8,/ab5a2866-40af-4355-aa7d-5a98cb8cffa6.jpg"},
{ key:"Bags",image:"https://images-static.nykaa.com/uploads/tr:w-220.8,/c8e7c397-77a6-47d2-8751-d7fb07c0318d.jpg"},
{key:"Flats-Heels", image:"https://images-static.nykaa.com/uploads/tr:w-220.8,/fff9d0b6-483a-41cd-807f-2b0e9d77637b.jpg"},
{key:'Saree',image:"https://images-static.nykaa.com/uploads/tr:w-220.8,/653a38ab-1e35-4f8d-81a9-2362bc75bc9e.jpg"},
{key:"Jewellery",image:"https://images-static.nykaa.com/uploads/tr:w-220.8,/7b9b830a-1292-4b3a-adcd-7b84be114916.jpg"}
]

const men=[{key:'Shirt',image:'https://images-static.nykaa.com/uploads/tr:w-180,/19508f79-bf7e-4190-99c7-210aa8ddbe01.jpg'}]

const girl=[{key:"Girl",image:'https://images-static.nykaa.com/uploads/tr:w-220.8,/a6b87c37-9206-4243-bde6-74cabd22ebfb.jpg'}]


export default function Navbar({data}) {
  const nav = useNavigate();
  // console.log("dataa:",data)
  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);
  // console.log("action",action)

  const handleClick=(gender,array,design)=>{
    action.TypeAction({ url: data });
    action.ImageAction({images:array});
    action.CounterAction(1)
    action.DesignAction(design)
    nav(`/allProducts/${gender}`);
  }

  const womenDesign=["https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/ef9bfb3a-9ab4-4ad3-87d9-0af2b093ed73.gif",
                    "https://images-static.nykaa.com/uploads/c620335e-85dc-4bee-a0ee-02665668b794.gif?tr=w-600,cm-pad_resize",
                    "https://images-static.nykaa.com/uploads/3252ce59-13b6-4a92-b7a2-95f2402ce7e9.gif?tr=w-600,cm-pad_resize",
                    "https://images-static.nykaa.com/tr:w-1162,c-at_max/uploads/85a8480c-5f90-4a8e-8c8c-4e6fc034d780.gif",
                    "https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/1232de15-36f5-4939-a72f-3ee8306bec6e.jpg",
                    "https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/86856eb5-a0f3-4f1f-b1fa-f2c3ec8b2acf.jpg"
                    ]

  return (
    <div style={{marginBottom:"30px"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          <img style={{height:'50px', width:'70px', marginLeft:'70px', marginRight:'100px'}} src="https://cdn.mos.cms.futurecdn.net/Ziv82j6YvdrvHqmxYjiTo3-1024-80.png.webp" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <div>
                <button className="btn btn-primary" style={{marginRight:'50px', fontSize:'20px'}} onClick={()=>handleClick('Women',women,womenDesign)}>
                Women <span className="sr-only">(current)</span>
              </button>
              </div>
            </li>
            <li className="nav-item">
            <button className="btn btn-primary" style={{marginRight:'50px', fontSize:'20px'}} onClick={()=>handleClick('Men',men)}>
                Men <span className="sr-only">(current)</span>
              </button>
            </li>
            <li className="nav-item">
            <button className="btn btn-primary" style={{marginRight:'50px', fontSize:'20px'}} onClick={()=>handleClick('Girl',girl)}>
                Kids <span className="sr-only">(current)</span>
              </button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <button style={{marginLeft:'100px', marginRight:'10px', border:'0px'}}>Signup</button>
          <button style={{border:'10px'}}>Login</button>
        </div>
      </nav>
    </div>
  );
}

