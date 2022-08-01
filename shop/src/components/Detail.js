import { useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let pick_shoe = props.shoes.find(function (x) {
    return x.id == id;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={pick_shoe.img_src} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{pick_shoe.title}</h4>
          <p>{pick_shoe.price}</p>
          <p>{pick_shoe.content}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
