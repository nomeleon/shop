import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Main from "./components/Main";
import Detail from "./components/Detail";
import { data } from "./data/data";
import { useState } from "react";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

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
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

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
