import logo from "./assets/ikki.svg";
import check from "./assets/check.svg";
import puzzle from "./assets/puzzle.png";
import layers from "./assets/layers.png";
import compare from "./assets/compare.png";
import database from "./assets/data.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App w-100">
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
      <Row className="mx-auto home w-75 justify-content-cente mb-4" id="home">
        <h3 className="text-white text-center title">
          Qu'est ce que c'est l'architecture web ?
        </h3>
        <Col align="center">
          <Image className="homeImg mx-auto fade-in-down" src={puzzle} />
          <p className="text-white mt-3 sub text-uppercase">Conception</p>
        </Col>
        <Col align="center">
          <Image className="homeImg mx-auto fade-in-down" src={layers} />
          <p className="text-white mt-3 sub text-uppercase">Organisation</p>
        </Col>
        <Col align="center">
          <Image className="homeImg mx-auto fade-in-down" src={database} />
          <p className="text-white mt-3 sub text-uppercase">Gestion</p>
        </Col>
        <Col align="center">
          <Image className="homeImg mx-auto fade-in-down" src={compare} />
          <p className="text-white mt-3 sub text-uppercase">Interactions</p>
        </Col>
        <h5 className="text-white text-center title my-4">Pourquoi ?</h5>
        <Col md={4}>
          <h5 className="text-white sub"><span><Image className="icon" src={check} /></span>Intégration rapide et simple</h5>
        </Col>
        <Col md={4}>
          <h5 className="text-white sub"><span><Image className="icon" src={check} /></span>Performances</h5>
        </Col>
        <Col md={4}>
          <h5 className="text-white sub"><span><Image className="icon" src={check} /></span>Flexibilité et évolutivité</h5>
        </Col>
        <Col md={4}>
          <h5 className="text-white sub"><span><Image className="icon" src={check} /></span>Économie d'argent</h5>
        </Col>
        <Col md={4}>
          <h5 className="text-white sub"><span><Image className="icon" src={check} /></span>Haute sécurité </h5>
        </Col>
        <Col md={4}>
          <h5 className="text-white sub"><span><Image className="icon" src={check} /></span>Temps de développement </h5>
        </Col>
      </Row>
      <Row className="mx-auto cardBg mb-4" id="client">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Client Server</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="mono">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Monolithic Server</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="micro">
        <div className="headerGreen">
          <h3 className="title text-center my-3">microservice Server</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="serverless">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Serverless</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="spa">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Single Page App</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg"  id="pwa">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Progressive Web App</h3>
        </div>
      </Row>
      <Row className="mx-0 conclude" id="conclude">
        <h3 className="text-white text-center my-3 title">Conclusion</h3>
      </Row>
    </div>
  );
}

export default App;
