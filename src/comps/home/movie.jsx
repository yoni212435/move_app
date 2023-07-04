import {useEffect, useState} from "react"
import axios from "axios"
import MainMovie from "./MainMovie"
import Carousel from "./Carousel"
import "./movie.css"
import {useAPIContext} from '../../contexts/APIContext'
import printErrorMessage from '../../printErrorMessage'

export default function Movie(props) {
    let [data, setData] = useState([])
    const [i, setI] = useState(1)
    const [j, setJ] = useState(0)
    const [genre, setGenre] = useState([])
    let {setDataApp, user, dataApp, index, urlMyListAndAllCategories} = useAPIContext()
    const apiUrl = "https://api.tvmaze.com/"

    function sendIndex(id) {
        let index = data.findIndex(element => element.id === id)
        if (index > -1) {
            setJ(index)
        }
    }

    const changeI = num => {
        setI(num)
    }

    const changeJ = num => {
        setJ(num)
    }

    const changeJToIndex = () => {
        setJ(index)
    }

    const getMovieData = () => axios.get(apiUrl + "shows")

    useEffect(() => {
        getMovieData().then(r => {
                setData(r.data)
                setDataApp(r.data)
            }
        )
            .catch(e => printErrorMessage(e))
    }, [])

    useEffect(() => {

        if (user.zhaner) {
            setGenre(user.zhaner)
        }
    }, [user.zhaner])

    useEffect(() => {
        if (urlMyListAndAllCategories === '/MyList' || urlMyListAndAllCategories === '/profile') {
            changeJToIndex()
            urlMyListAndAllCategories = ''
        }
    }, [urlMyListAndAllCategories])

    return (
        <div>
            <div>
                <MainMovie data={data} i={i - 1} j={j} movieList={props.movieList} sendIndex={sendIndex}
                           changeI={changeI}
                           changeJ={changeJ}/>
                {
                    genre && genre.map((ele, i) => <Carousel key={i} data={dataApp} sendIndex={sendIndex}
                                                             changeJ={changeJ}
                                                             changeJToIndex={changeJToIndex}
                                                             category={ele}/>)
                }
            </div>
        </div>
    )
}
