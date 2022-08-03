import { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Main = ({ shoes }) => {
  const [mainShoes, setShoes] = useState(shoes);

  return (
    <>
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {mainShoes.map((shoe, i) => {
            return (
              <ShoeComponent mainShoes={mainShoes[i]} key={i}></ShoeComponent>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              //데이터 가져온 후 처리
              let copy = [...mainShoes, ...result.data];
              setShoes(copy);
            })
            .catch(() => {
              //예외처리
              console.log("error");
            });
        }}
      >
        버튼
      </button>
    </>
  );
};

// //서버로 post 전송 예시
// axios.post('url', {name:'kim'})

// //동시에 ajax 여러개 요청 : 해당 ajax 모두 성공 시 then
// Promise.all([axios.get('/url1'), axios.get('/url2')])
// .then(()=>{})

// //기본 문법 ajax : json 데이터로 변환
// fetch('utl')
// .then(result => result.json())
// .then(data => {})

function ShoeComponent(props) {
  let navigate = useNavigate();
  let id = props.mainShoes.id;

  return (
    <div className="col-md-4">
      <img
        src={props.mainShoes.img_src}
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
        {props.mainShoes.title}
      </h4>

      <p>{props.mainShoes.content}</p>
      <p>{props.mainShoes.price}</p>
    </div>
  );
}

export default Main;
