import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { data } from "./data";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Produncts</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
}

function ShoeComponent(props) {
  return (
    <div className="col-md-4">
      <img src={props.shoes.img_src} width="80%" alt="shoe_mg" />
      {/* public폴더 이미지 쓰는 권장방식 / src ={process.env.PUBLIC_URL + "/logo.png"}*/}
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
