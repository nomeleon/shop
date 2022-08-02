import { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Main = ({ shoes }) => {
  return (
    <div className="App">
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {shoes.map((shoe, i) => {
            return <ShoeComponent shoes={shoes[i]} key={i}></ShoeComponent>;
          })}
        </div>
      </div>
    </div>
  );
};

function ShoeComponent(props) {
  let navigate = useNavigate();
  let id = props.shoes.id;
  console.log(id);
  return (
    <div className="col-md-4">
      <img
        src={props.shoes.img_src}
        width="80%"
        alt="shoe_mg"
        onClick={() => {
          navigate("/detail/" + id);
        }}
      />

      {/* public폴더 이미지 쓰는 권장방식 / src ={process.env.PUBLIC_URL + "/logo.png"}*/}

      <h4
        onClick={() => {
          navigate("/detail/" + id);
        }}
      >
        {props.shoes.title}
      </h4>

      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Main;
