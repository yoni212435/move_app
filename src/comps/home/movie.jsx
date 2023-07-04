import {useEffect, useState} from "react"
import axios from "axios"
import MainMovie from "./MainMovie"
import Carusela from "./Carusela"
import "./movie.css"
import Footer from "./Footer"
import {useAPIContext} from '../../contexts/APIContext'

export default function Movie(props) {
    let [data, setData] = useState([])
    const [i, setI] = useState(1)
    const [j, setJ] = useState(0)
    const [zaner, setZaner] = useState([])
    let {setDataApp, user, dataApp, setIndex, index, urlMyListAndAllCategories} = useAPIContext()

    function sendIndex(id) {
        let index = data.findIndex(element => element.id === id)
        if (index > -1) {
            setJ(index)
        }
    }

    function changeI(num) {
        setI(num)
    }

    function changeJ(num) {
        setJ(num)

    }

    function changeJToIndex() {
        setJ(index)
    }


    async function getData() {
        const {data} = await axios.get("https://api.tvmaze.com/shows")
        setData(data)
        setDataApp(data)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {

        if (user.zhaner) {
            setZaner(user.zhaner)
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
                    zaner.length > 0 && zaner.map((ele, i) => <Carusela key={i} data={dataApp} sendIndex={sendIndex}
                                                                        changeJ={changeJ}
                                                                        changeJToIndex={changeJToIndex}
                                                                        category={ele}/>)
                }
            </div>
        </div>
    )
}
