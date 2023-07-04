import {useEffect, useState} from "react"
import "./carusela.css"
import Slider from "react-slick"
import {getFirestore} from "firebase/firestore"
import {useAPIContext} from '../../contexts/APIContext'

export default function Carusela(props) {

    const {windowSize, dataApp} = useAPIContext()
    const [moviesZaner, setMoviesZaner] = useState([])
    const db = getFirestore()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: keepScreen(windowSize),
        slidesToScroll: 1
    }


    function keepScreen(windowWidth) {
        const md = "768"
        const lg = "992"
        const xl = "1200"

        if (windowWidth >= xl) {
            return 6
        }
        if (windowWidth >= lg) {
            return 4
        }
        if (windowWidth >= md) {
            return 3
        }
        return 2
    }


    function filterAsZner() {
        let filterData = dataApp?.filter(ele => ele.genres.includes(props.category))
        setMoviesZaner(filterData)
    }

    useEffect(() => {
        if (props.category) {
            filterAsZner()
        }
    }, [props.category])


    return (
        <div className="main_slider">
            <div className="main_slider_tow">
                <div className="sliderA">
                    <p className="category">{props.category}</p>
                    <Slider {...settings}>
                        {moviesZaner?.map((e, i) => (
                            <div className="item_carusela " key={e.id}>
                                <button
                                    onClick={() => {
                                        props.sendIndex(e.id)

                                    }}
                                >
                                    <img src={e.image.medium} alt="" height="250px"/>
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
