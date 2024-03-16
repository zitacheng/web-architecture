import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/ikki.svg";

export function Header() {
  return (
    <Navbar className="navBg w-100" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="130"
            height="auto"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="#client" className="text-white">
            Client-Server
          </Nav.Link>
          <Nav.Link href="#mono" className="text-white">
            Monolithic
          </Nav.Link>
          <Nav.Link href="#micro" className="text-white">
            Microservices
          </Nav.Link>
          <Nav.Link href="#serverless" className="text-white">
            Serverless
          </Nav.Link>
          <Nav.Link href="#spa" className="text-white">
            SPA
          </Nav.Link>
          <Nav.Link href="#pwa" className="text-white">
            PWA
          </Nav.Link>
          <Nav.Link href="#conclude" className="text-white">
            Conclusion
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
