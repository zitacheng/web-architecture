import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {WebChart} from '../component/WebChart.jsx';

export function Comparaison() {
  return (
    <Row className="mx-auto mb-4 cardBg" id="pwa">
      <div className="headerGreen">
        <h3 className="title text-center my-3">Comparaison</h3>
      </div>
      <Row className="mx-auto w-75 mt-4 justify-content-center">
        <WebChart />
      </Row>
    </Row>
  );
}
