import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const women = [
  {
    key: "Kurta-Sets",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-220.8,/a3847fe4-e42b-4761-b4e8-0966c08ae89c.jpg",
  },
  {
    key: "Kurti",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-220.8,/ab5a2866-40af-4355-aa7d-5a98cb8cffa6.jpg",
  },
  {
    key: "Bags",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-220.8,/c8e7c397-77a6-47d2-8751-d7fb07c0318d.jpg",
  },
  {
    key: "Flats-Heels",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-220.8,/fff9d0b6-483a-41cd-807f-2b0e9d77637b.jpg",
  },
  {
    key: "Saree",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-220.8,/653a38ab-1e35-4f8d-81a9-2362bc75bc9e.jpg",
  },
  {
    key: "Jewellery",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-220.8,/7b9b830a-1292-4b3a-adcd-7b84be114916.jpg",
  },
];

const men = [
  {
    key: "Shirt",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-180,/19508f79-bf7e-4190-99c7-210aa8ddbe01.jpg",
  },
  {
    key: "T-Shirt",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-180,/774c9981-6602-4a0e-90e2-a2017f0a83ee.jpg",
  },
  {
    key: "Jeans",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-180,/d867879b-4a87-4c95-9690-0a7ecfb3db9b.jpg",
  },
  {
    key: "Formal-Shoes",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-180,/da1908aa-3590-4883-baa5-735c669c5b7b.jpg",
  },
  {
    key: "Watch",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-180,/afba691f-2190-46e0-9360-1617f1bad81d.jpg",
  },
  {
    key: "Fashion-Accessories",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-180,/3c1ae391-f98b-4a84-8ba4-d83a7a10894e.jpg",
  },
  {
    key: "Men-Kurta-Sets",
    image:
      "https://images-static.nykaa.com/uploads/tr:w-180,/ae551956-6227-4d71-aa4a-423458e83568.jpg",
  },
];

const girl = [
  {
    key: "Girl",
    image:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg",
  },
  {
    key: "Kids-Ethnic-Wear",
    image:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/efc4b19d-179f-4437-961c-839df50299a51604906586690-36-Essentials-Night_innerwear.jpg",
  },
  {
    key: "Flip-Flops",
    image:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/33368b8b-8702-4108-96a9-b8fa5b7ed36f1604906586455-31-Essentials-FlipFlop_sandals.jpg",
  },
  {
    key: "Shorts",
    image:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/29baf945-9e5b-4f0e-bb05-0ce65c57f9c91604906586502-32-Essentials-Shorts.jpg",
  },
];

export default function Navbar({ data }) {
  // console.log("data in nav : ", data);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);

  const [search, setSearch] = useState("");

  const handleClick = (gender, array) => {
    action.TypeAction({ url: data });
    action.ImageAction({ images: array });
    action.CounterAction(1);
    if (gender === "Women") {
      action.DesignAction({ men: false, women: true, girl: false });
    } else if (gender === "Men") {
      action.DesignAction({ men: true, women: false, girl: false });
    } else if (gender === "Girl") {
      action.DesignAction({ men: false, women: false, girl: true });
    }
    nav(`/allProducts/${gender}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(`${search}`)
    axios
      .get(`https://myntra-application.herokuapp.com/fashion?type=${search}`)
      .then(({ data }) => {
        // console.log(data)
        action.TypeAction({ url: data });
      });
  };

  const handleSignup = () => {
    nav("/user/signup");
  };

  const handleLogin = () => {
    nav("/user/login");
  };

  // const StyledBadge = styled(Badge)(({ theme }) => ({
  //   "& .MuiBadge-badge": {
  //     right: -3,
  //     top: 13,
  //     border: `2px solid ${theme.palette.background.paper}`,
  //     padding: "0 4px",
  //   },
  // }));

  return (
    <div style={{ marginBottom: "10px", width: "100%" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            style={{
              height: "50px",
              width: "70px",
              marginLeft: "70px",
              marginRight: "100px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png"
            alt=""
          />
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
                <button
                  className="btn btn-primary"
                  style={{
                    marginRight: "50px",
                    fontSize: "16px",
                    color: "#ff3f6c",
                    background: "#f8f9fa",
                    border: "0",
                  }}
                  onClick={() => handleClick("Women", women)}
                >
                  WOMEN <span className="sr-only">(current)</span>
                </button>
              </div>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary"
                style={{
                  marginRight: "50px",
                  fontSize: "16px",
                  color: "#ff3f6c",
                  background: "#f8f9fa",
                  border: "0",
                }}
                onClick={() => handleClick("Men", men)}
              >
                MEN <span className="sr-only">(current)</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary"
                style={{
                  marginRight: "50px",
                  fontSize: "16px",
                  color: "#ff3f6c",
                  background: "#f8f9fa",
                  border: "0",
                }}
                onClick={() => handleClick("Girl", girl)}
              >
                KIDS <span className="sr-only">(current)</span>
              </button>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={(e) => handleSearch(e)}
          >
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              style={{ marginRight: "50px" }}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          {/* <IconButton aria-label="cart">
            <StyledBadge badgeContent={1} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton> */}
          <button className="btn-signup" onClick={() => handleSignup()}>
            SIGNUP
          </button>
          <button
            className="btn-login"
            onClick={() => handleLogin()}
            style={{ border: "10px", padding: "6px 11px" }}
          >
            LOGIN
          </button>
        </div>
      </nav>
    </div>
  );
}
