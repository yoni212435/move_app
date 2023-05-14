import React, { useContext, useState } from "react";
import "./carusela.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MainMovie from "./MainMovie";
import Slider from "react-slick";
import { APIContext } from "../../movie";

export default function Carusela(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  // const [i, setI] = useState(0);
  // const data = useContext(APIContext);
  function bg_main() {}
// console.log(props.data);
  return (
    <div className="main_slider">
      <div className="main_slider_tow">
        <div className="sliderA">
          <p className="category">nnnn</p>
          <Slider {...settings}>
            {props.data?.map((e,i) => (
              <div className="item_carusela " key={e.id}>
                <button
                  onClick={() => {
                    props.changI(e.id);
                    props.changeJ(i);
                    console.log(e.id);
                    console.log(i);
                    
                  }}
                >
                  <img src={e.image.medium} alt="" height="250px" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
        <div className="sliderB">
          <p className="category">nnnn</p>
          <Slider {...settings}>
            {props.data?.map((e,i) => (
              <div className="item_carusela" key={e.id}>
                <button
                  onClick={() => {
                    props.changI(e.id);
                    
                  }}
                >
                  <img src={e.image.medium} alt="" height="250px" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
        <div className="sliderC">
          <p className="category">nnnn</p>
          <Slider {...settings}>
            {props.data?.map((e,i) => (
              <div className="item_carusela" key={e.id}>
                <button
                  onClick={() => {
                    props.changI(i);
                    
                  }}
                >
                  <img src={e.image.medium} alt="" height="250px" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
