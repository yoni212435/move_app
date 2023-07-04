import React, {useState} from "react"
import './Search.css'
import {useAPIContext} from '../../contexts/APIContext'

export default function Search(props) {
    const [searchResult, setSearchResult] = useState('')
    let {dataApp} = useAPIContext()
    const [filteredData, setFilteredData] = useState([])
    const [over, setOver] = useState(false)

    function search(e) {
        const x = e.target.value
        let dataF = x ? dataApp?.filter((ele) => ele.name.startsWith(x[0].toUpperCase() + x.slice(1).toLowerCase())) : null
        setFilteredData(dataF)
        setOver(true)

    }

    return (
        <div className="main_search">
            <input className="inpSearch" name="" type="search" placeholder="Search..." onChange={search}/>

            <div style={{display: over ? 'flex' : 'none'}} className="div_search">
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
        </div>
    )
}
