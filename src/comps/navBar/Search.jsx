import React, {useRef, useState} from "react"
import './Search.css'
import {useAPIContext} from '../../contexts/APIContext'

export default function Search(props) {
    const [searchResult, setSearchResult] = useState('')
    let {dataApp} = useAPIContext()
    const [filteredData, setFilteredData] = useState([])
    const [toggleSearchView, setToggleSearchView] = useState(false)
    const searchRef = useRef()

    function handleSearch() {
        const {value} = searchRef.current
        let dataF = value ? dataApp?.filter((ele) => ele.name.startsWith(x[0].toUpperCase() + x.slice(1).toLowerCase())) : null
        setFilteredData(dataF)
        setToggleSearchView(true)
    }

    return (
        <div className="main_search">
            <input className="inpSearch" ref={searchRef} name="" type="search" placeholder="Search..." onChange={handleSearch}/>

            {toggleSearchView && <div className="div_search">
                {
                    filteredData?.map((el, i) =>
                        <div className="div_name" key={i}>
                            <div className="name_search" onClick={() => props?.changeJ(
                                dataApp.findIndex(x => x.id === el.id)
                            )}>{el.name}</div>
                        </div>
                    )
                }
            </div>
            }
        </div>
    )
}
