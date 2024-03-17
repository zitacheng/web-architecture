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
    <Row className="mx-4 conclude justify-content-center" id="conclude">
      <h3 className="text-white text-center mt-3 title">Conclusion</h3>
      <Col md={5}>
        <Card className="botCard">
          <Card.Body className="cardBodygreen">
            <Card.Title className="txtClassic">
              Comment choisir la bonne{" "}
              <span className="fontChange"> architecture ?</span>
            </Card.Title>
            <Card.Text className="subBig mt-3">
              Complexité<br />
              Traffic attendu <br />
              Les délais et les budgets du projet <br />
              Les besoins de sécurité <br />
              Niveau de disponibilité souhaité <br />
              Taille de l'équipe <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Row>
          <Col md={5} lg={4} sm={6} xs={12}>
          {cardDisplay('Simple et peu de traffic', 'Client server')}
          </Col>
          <Col md={5} lg={4} sm={6} xs={12}>
            {cardDisplay('Complexe et flux de donnée important', 'Microservices')}
          </Col>
          <Col md={5} lg={4} sm={6} xs={12}>
          {cardDisplay('Haute disponibilité', 'Serverless')}
          </Col>
          <Col md={5} lg={4} sm={6} xs={12}>
          {cardDisplay('Développement rapide', 'Monolitic')}
          </Col>
          <Col md={5} lg={4} sm={6} xs={12}>
          {cardDisplay("Expérience utilisateur dynamique, fluide et interactive", 'SPA')}
          </Col>
          <Col md={5} lg={4} sm={6} xs={12}>
          {cardDisplay("Multiplateforme, mise à jour automatique et peu couteux ", 'PWA')}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
