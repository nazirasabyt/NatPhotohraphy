import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/img/hero.jpg";
import Img2 from "../../assets/img/hero1.jpg";
import Img3 from "../../assets/img/hero2.jpg";

const Intro = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="intro">
      <div className="intro__inner">
        <Slider {...settings}>
          <img className="intro__slider-image" src={Img1} />
          <img className="intro__slider-image" src={Img2} />
          <img className="intro__slider-image" src={Img3} />
        </Slider>
      </div>
    </div>
  );
};

export default Intro;
