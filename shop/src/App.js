import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import { Container, Nav, Navbar } from "react-bootstrap";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">Produncts</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/cart" element={<div>장바구니</div>} /> */}
      </Routes>
    </div>
  );
}

export default App;
