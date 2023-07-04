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
    const {handelUserObjFirebase, user: userContext, updateToMyList} = useAPIContext()
    const [toggleInfoView, setToggleInfoView] = useState(false)
    const [toggleAddIcon, setToggleAddIcon] = useState(false)

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
                <img src={img} className="img_all" alt={"movie"}/>
                <div className="btn_div_watch">
                    <button className="btn_watch">
                        <AiOutlinePlayCircle/> WATCH
                    </button>
                </div>

                <div className="btn_div_info">
                    <button className="btn_info" onClick={() => setToggleInfoView(!toggleInfoView)}>
                        <AiOutlineInfoCircle/> INFO
                    </button>
                </div>
            </div>

            {toggleInfoView &&
                <Info j={props.j} data={props.data}/>
            }

            <div className="add-button"
                 onMouseEnter={() => setToggleAddIcon(true)}
                 onMouseLeave={() => setToggleAddIcon(false)}
                 onClick={addToMyList}>
                <AiOutlinePlusCircle className="add-button-icon"/>
                {toggleAddIcon &&
                    <div className="add-button-icon-label">
                        add movie to list
                    </div>}
            </div>
        </div>
    )
}
