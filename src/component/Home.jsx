import check from "../assets/check.svg";
import puzzle from "../assets/puzzle.png";
import layers from "../assets/layers.png";
import compare from "../assets/compare.png";
import database from "../assets/data.png";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function Home() {
  return (
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
  );
}
