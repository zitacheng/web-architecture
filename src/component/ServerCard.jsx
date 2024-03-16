import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import check from "../assets/check.svg";

export function ServerCard({ serverDesc, title, id }) {
  console.log("points ", serverDesc);
  return (
    <Row className="mx-auto cardBg mb-4 align-items-center py-4" id={id}>
      <div className="headerGreen">
        <h3 className="title text-center my-3">{title}</h3>
      </div>
      <Col>
        {serverDesc.data.map(function (point) {
          return (
            <p className="pointTitle" key={point.title}>
              <span>
                <Image className="icon" src={check} />
              </span>
              {point.title}
            </p>
          );
        })}
      </Col>
      <Col>
        <Image className="serverImg" src={serverDesc.img} />
      </Col>
    </Row>
  );
}
