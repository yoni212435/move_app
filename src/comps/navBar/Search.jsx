import React, {useRef, useState} from "react"
import './Search.css'

export default function Search(props) {
    const [searchResult, setSearchResult] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [toggleSearchView, setToggleSearchView] = useState(false)
    const searchRef = useRef()

    // function handleSearch() {
    //     const {value} = searchRef.current
    //     let filteredData = value ? dataApp?.filter((ele) =>
    //         ele.name.startsWith(value[0].toUpperCase()
    //             + value.slice(1).toLowerCase())) : null
    //     setFilteredData(filteredData)
    //     setToggleSearchView(true)
    // }

    return (
        <div className="main_search">
            <input className="inpSearch" ref={searchRef} name="" type="search" placeholder="Search..."
                   onChange={handleSearch}/>

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
