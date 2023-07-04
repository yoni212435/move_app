import React, {useEffect, useState} from "react"
import "./MainMovie.css"
import Nav from "./Nav"
import {AiOutlineInfoCircle, AiOutlinePlayCircle, AiOutlinePlusCircle} from "react-icons/ai"
import Info from "../info/Info"
import "bootstrap/dist/css/bootstrap.min.css"
import {useAPIContext} from '../../contexts/APIContext'

export default function MainMovie(props) {

    let img = props?.data?.[props.j]?.image?.original
    const [over, setOver] = useState(false)
    const [ShowIconAdd, setShowIconAdd] = useState(false)
    // const [user, setUser] = useState({});
    const {handelUserObjFirebase, user: userContext, updateToMyList} = useAPIContext()

    function changeInfo() {
        setOver(!over)
    }

    function changeAdd() {
        setShowIconAdd(!ShowIconAdd)
    }

    function addToMyList() {
        let movieListFilter = props.movieList?.find(ele => props.data[props.j].id === ele.id)
        if (!movieListFilter && props.data.find(x => x.id === props?.data[props.j].id)) {
            props.movieList?.push(props.data[props.j])
            updateToMyList([...props.movieList, props.data[props.j]])
        }

    }

    useEffect(() => {
        handelUserObjFirebase()

    }, [userContext.id])


    return (
        <div className="main_all">
            <Nav changeI={props.changeI} changeJ={props.changeJ} sendIndex={props.sendIndex}/>
            <div className="main_watch_info">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={img} className="img_all"/>
                <div className="btn_div_watch">
                    <button className="btn_watch">
                        <AiOutlinePlayCircle/> WATCH
                    </button>
                </div>

                <div className="btn_div_info">
                    <button className="btn_info" onClick={changeInfo}>
                        <AiOutlineInfoCircle/> INFO
                    </button>
                </div>
            </div>
            <div className="info_comp" style={{display: over ? "block" : "none"}}>
                <Info j={props.j} data={props.data}/>
            </div>
            <div className="div_add" onMouseEnter={changeAdd} onClick={addToMyList}>
                <AiOutlinePlusCircle className="icon_add"/>
                <div
                    style={{display: ShowIconAdd ? "block" : "none"}}
                    className="div_masseg_add"
                >
                    add movie to MyList
                </div>
            </div>
        </div>
    )
}
