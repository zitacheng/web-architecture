import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function Conclude() {
  function cardDisplay(desc, archi) {
    return(
      <div className="cardEnd mb-4" tabIndex="0">
          <div className="card-front">
            <h3 className="cardDesc my-auto">{desc}</h3>
          </div>
          <div class="card-back">
            <h3 className="cardDesc  my-auto">{archi}</h3>
          </div>
      </div>
    );
  }

  return (
    <Row className="mx-0 conclude justify-content-center" id="conclude">
      <h3 className="text-white text-center mt-3 title m-auto">Conclusion</h3>
      <Col md={5}>
        <Card className="botCard">
          <Card.Body className="cardBodygreen">
            <Card.Title className="txtClassic">
              Comment choisir la bonne{" "}
              <span className="fontChange"> architecture ?</span>
            </Card.Title>
            <Card.Text className="subBig mt-3">
              Statique ou complexe ?<br />
              Traffic attendu <br />
              Niveau de complexité <br />
              Les délais et les budgets du proejt <br />
              Les besoins de sécurité <br />
              Niveau de disponibilité souhaité <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Row>
          <Col md={4}>
          {cardDisplay('Simple et peu de traffic', 'Client server')}
          </Col>
          <Col md={4}>
            {cardDisplay('Complexe et flux de donnée important', 'Microservices')}
          </Col>
          <Col md={4}>
          {cardDisplay('Haute sécurité', 'Serverless')}
          </Col>
          <Col md={4}>
          {cardDisplay('Développement rapide', 'Monolitic')}
          </Col>
          <Col md={4}>
          {cardDisplay("Expérience utilisateur dynamique, fluide et interactive", 'SPA')}
          </Col>
          <Col md={4}>
          {cardDisplay("Multiplateforme, mise à jour automatique et peu couteux ", 'PWA')}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
