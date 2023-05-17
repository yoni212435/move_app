import React from 'react'
import { createContext } from 'react'
import { APIContext } from '../movie'
import Slider from "react-slick";



export default function MyList(props) {

  // const {listAr} = createContext(APIContext)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {/* המערך נמחק ברגע שאני לוחץ על מיי ליסט */}
        {/* פרופס מאפפ */}
            {props.listAr?.map((e,i) => 
              <div className="item_carusela " key={i}>
                <button
                  onClick={() => {
                   console.log(9);
                  }}
                >
                  <img src={e.image.medium} alt="" height="250px" />
                </button>
              </div>
            )}
          </Slider>
          
    </div>

  )
}
