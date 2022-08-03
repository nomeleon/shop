import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import styled from "styled-components";

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: black;
//   padding: 10px;
// `;

// // 기존 스타일 복사 기능
// styled.button(YellowBtn);

const Detail = (props) => {
  let { id } = useParams();
  let pick_shoe = props.shoes.find(function (x) {
    return x.id == id;
  });

  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);

  //component mount, update 시 코드 실행 : html 렌더링 후에 동작한다.
  //어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착 등
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      //타이머 제거 함수
      clearTimeout(timer);
    };
  }, []);
  //[] : useEffect의 실행조건

  return (
    <div className="container">
      {/* <YellowBtn bg="blue">버튼</YellowBtn> */}
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매 시 할인</div>
      ) : null}
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

function TabContent({ tab }) {
  // if (tab == 0) {
  //   return <div>내용0</div>;
  // } else if (tab == 1) {
  //   return <div>내용1</div>;
  // } else if (tab == 2) {
  //   return <div>내용2</div>;
  // }
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab];
}

export default Detail;
