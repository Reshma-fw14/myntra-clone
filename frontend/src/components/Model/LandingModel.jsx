import React, { useEffect, useState } from "react";
import { CardModel } from "../Card/Card";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import "./LandingModel.css";

export default function ModelScrollX({ data }) {
  const [TypeData, setTypeData] = useState([]);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const action = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    getTypeData();
  }, []);

  const getTypeData = () => {
    const { url, type, limit } = data;
    axios.get(`${url}?type=${type}&_limit=${limit}`).then(({ data }) => {
      setTypeData(data);
    });
  };

  function handelClick(x) {
    action.TypeAction({ url: data.url });
    if (x == 1) {
      nav(`/products/${data.type}`);
    } else {
      nav(`/products/all`);
    }
  }

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <div className="model_bar_user" style={{width:'83%', marginLeft:'130px'}}>
          <div className="user_model_button">
            <Button variant="outlined disabled" color="teal"style={{width:'80%', border:'1px solid red', fontSize:'20px'}}>
              {data.type}
            </Button>
          </div>
          <div className="user_model_button">
            <Button
              variant="outlined"
              onClick={() => {
                handelClick(0);
              }}
            >
              Products
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handelClick(1);
              }}
            >
              View All
            </Button>
          </div>
        </div>
        <div
          className="overflow-scroll model_container_user "
          style={{ scrollbarWidth: "none", marginTop:'15px' }}
        >
          {TypeData.map((ele) => (
            <CardModel data={ele} key={ele.id} />
          ))}
        </div>
      </div>
    </>
  );
}
