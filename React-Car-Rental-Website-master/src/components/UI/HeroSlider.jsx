import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Sıkıldınız mı?</h4>
            <h1 className="text-light mb-4">Yepyeni oyunlarımız ile sizlerleyiz!!!</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/game">Oyna</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Giriş yapmadan oynanır mı?</h4>
            <h1 className="text-light mb-4">Evet, hiç giriş yapmadan oyun oynanır!!!</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/game">Oyna</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">BulutGame Her Zaman, Her Yerde</h4>
            <h1 className="text-light mb-4">Oyun Oynamanıza Olanak Sağlar</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/game">Oyna</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
