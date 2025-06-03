import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/slider-img/burakgames-slider.jpg";
import jsLogo from "../../assets/all-images/slider-img/javascript-line.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Hakkımızda</h4>
              <h2 className="section__title">Burak Game'e Hoş Geldiniz</h2>
              <p className="section__description">
              "Merhaba! Biz, oyun tutkusuyla dolu bir ekibiz ve en sevdiğimiz şey, yaratıcı, eğlenceli ve yenilikçi oyunlar
              geliştirmek. Bu platformda, kendi geliştirdiğimiz birbirinden keyifli oyunları sizlerle paylaşıyoruz.
              Amacımız, her yaştan oyuncuya benzersiz deneyimler sunmak ve oyun dünyasını birlikte keşfetmek. Yeni
              maceralara hazır mısınız? Biz buradayız, eğlence başlasın!". Dilerseniz, bunu React projenize kolayca
              ekleyebilir ve küçük tasarım dokunuşlarıyla daha da dikkat çekici hale getirebiliriz.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                <i class="ri-reactjs-line"></i> React.js
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                 <img src={jsLogo} alt="js-logo" className="js-logo"/>  Javascript
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                <i class="ri-css3-line"></i> Css
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                <i class="ri-html5-line"></i> Html
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
