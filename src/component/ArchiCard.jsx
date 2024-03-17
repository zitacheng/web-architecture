import React, { useEffect, useRef } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import check from "../assets/check.svg";

export function ArchiCard({ serverDesc, title, id }) {
  const archiImgRef = useRef(null);
  const imgWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });

    if (archiImgRef.current) {
      observer.observe(archiImgRef.current);
    }
    if (imgWrapperRef.current) {
      observer.observe(imgWrapperRef.current);
    }

    return () => {
      if (archiImgRef.current) {
        observer.unobserve(archiImgRef.current);
      }
      if (imgWrapperRef.current) {
        observer.unobserve(imgWrapperRef.current);
      }
    };
  }, [archiImgRef, imgWrapperRef]);
  return (
    <Row className="mx-auto cardBg mb-4 align-items-center py-4 justify-content-center w-75" id={id}>
      <div className="headerGreen">
        <h3 className="title text-center my-3">{title}</h3>
      </div>
      <Col md={5} className="colPoints">
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
      <Col md={7} ref={imgWrapperRef}>
        <Image ref={archiImgRef} className="archiImg" src={serverDesc.img} />
      </Col>
    </Row>
  );
}
