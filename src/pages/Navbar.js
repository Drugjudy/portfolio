import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import '../css/navbar.css'

const Bar = () => {
    return (
      
    <Navbar sticky="top" className="navbar-home" variant="dark">
  <Container className="bg">
    <Navbar.Brand href="#">
      <img
        src="./logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> 
    </Navbar.Brand>
      <Nav>
         <Nav.Link eventKey={2} href="#about">
        Intro
      </Nav.Link>
       <Nav.Link eventKey={2} href="#work">
        Works
      </Nav.Link>
      <Nav.Link eventKey={2} href="#skills">
        Skills
      </Nav.Link>
      <Nav.Link eventKey={2} href="#contact">
        Contact
      </Nav.Link>
    </Nav>
  </Container>
  </Navbar>

    )
}

export default Bar;