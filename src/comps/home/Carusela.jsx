import { useContext, useEffect, useState } from "react";
import "./carusela.css";
import Slider from "react-slick";
import { doc, updateDoc , getFirestore} from "firebase/firestore";
import { APIContext } from "../../App";
import { useLocation } from "react-router-dom";


export default function Carusela(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  let {user ,url, changeUrl} = useContext(APIContext);
  const [moviesZaner, setMoviesZaner] = useState([]);
  const db = getFirestore()
  let {pathname} = useLocation();

  function filterAsZner(){
   let filterData = props.data.filter(ele =>ele.genres.includes(props.category))
   setMoviesZaner(filterData);
   }


  useEffect(()=>{
    changeUrl(pathname);
    if(props.category){
      filterAsZner();
      
    }
  },[props.category,url])
  return (
    <div className="main_slider">
      <div className="main_slider_tow">
        <div className="sliderA">
          <p className="category">{props.category}</p>
          <Slider {...settings}>
            {moviesZaner.map((e,i) => (
              <div className="item_carusela " key={e.id}>
                <button
                  onClick={() => {
                    props.sendIndex(e.id)
                    // props.changeJ(i);          
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
