import React from "react";
import DressSlideShow from "./DressSlideShow.jsx/DressSlideShow";
import ViewALlModel from "./ViewAllModel/ViewAllModel"
import { useSelector } from "react-redux";

export default function ViewAllProducts() {
  const All=useSelector((state)=>state.addKurtiReducer);

  return (
    <div>
      <br /><br />
      <ViewALlModel/>
    </div>
  )
}
