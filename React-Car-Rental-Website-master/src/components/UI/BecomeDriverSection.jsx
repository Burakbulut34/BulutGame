import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/slider-img/burakgames-slider.jpg";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
            Oyunlarınızı Paylaşmak mı istiyorsunuz?
            </h2>

            <button className="btn become__driver-btn mt-4">
              <a href="/gmcnt" style={{textDecoration: "none", color: "black"}}>Başvurunuzu Gönderin</a>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
