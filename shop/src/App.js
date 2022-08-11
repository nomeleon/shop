import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Main from "./components/Main";
import Detail from "./components/Detail";
import { data } from "./data/data";
import { createContext, useEffect, useState } from "react";
import Cart from "./components/Cart";
import axios from "axios";
import { useQuery } from "react-query";

//context api
//props 거치지 않고 변수 전달
// 컴포넌트 재활용 어렵고 성능 이슈로 잘 사용하지는 않음
export let Context1 = createContext();

function App() {
  // let obj = { name: "kim" };
  // //JSON.stringify : object -> json
  // localStorage.setItem("data", JSON.stringify(obj));
  // let a = localStorage.getItem("data");
  // //JSON.parse : json -> object
  // console.log(JSON.parse(a).name);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [amount] = useState([10, 11, 12]);

  let result = useQuery("작명", () =>
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      console.log(a);
      return a.data;
    })
  );

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#features">Produncts</Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && "loading.."}
            {result.error && "error.."}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route
          path="/detail/:id"
          element={
            // <Context1.Provider value={{ amount }}>
            <Detail shoes={shoes} />
            // </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        {/* nested routes
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route> */}

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

// function About() {
//   return (
//     <div>
//       <div>about페이지임</div>
//       {/* Outlet : nested routes 페이지 띄우는 위치 */}
//       <Outlet></Outlet>
//     </div>
//   );
// }

export default App;
