import React, { useEffect } from "react";
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.gameName}>
      <section>
        <Container>
          <Row>
          <h2 className="section__title">{singleCarItem.gameName}</h2>
          <iframe src={singleCarItem.gameUrl} frameborder="0" height="600" width="800" className="w-100"></iframe>
                    <Col lg="10">

          </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
