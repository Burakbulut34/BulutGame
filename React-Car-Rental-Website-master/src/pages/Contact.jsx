import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";
import "../styles/gamecnt.css"

const socialLinks = [
  {
    url: "https://github.com/Burakbulut34",
    icon: "ri-github-fill",
  },
  {
    url: "https://www.instagram.com/bura.kbulut34/",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.linkedin.com/in/burak-bulut-371797364/",
    icon: "ri-linkedin-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="İletişim">
      <CommonSection title="İletişim" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">İletişime Geçin</h6>
              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Ad" type="text" className="form__data"/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="E-posta" type="email" className="form__data" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    cols="102"
                    placeholder="Mesaj..."
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                Mesaj Gönder
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">İletişim Bilgileri</h6>
                <p className="section__description mb-0">
                  İstanbul / Türkiye
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefon:</h6>
                  <p className="section__description mb-0">+90 520 483 15 73</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">E-posta:</h6>
                  <p className="section__description mb-0">burakbltu8@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Takip Et</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                {socialLinks.map((item, index) => (
  <a
    href={item.url}
    key={index}
    target="_blank"
    rel="noopener noreferrer"
    className="social__link-icon"
  >
    <i class={item.icon}></i>
  </a>
))}

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
