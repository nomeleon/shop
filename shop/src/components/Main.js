import { useState } from "react";
import { data } from "../data";
import "../App.css";
import { Link } from "react-router-dom";

const Main = () => {
  let [shoes] = useState(data);

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
  return (
    <div className="col-md-4">
      <Link to="/detail">
        <img src={props.shoes.img_src} width="80%" alt="shoe_mg" />
      </Link>
      {/* public폴더 이미지 쓰는 권장방식 / src ={process.env.PUBLIC_URL + "/logo.png"}*/}
      <Link to="/detail">
        <h4>{props.shoes.title}</h4>
      </Link>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Main;
