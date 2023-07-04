import React, {useState} from "react"
import "./Allcategory.css"
import {useNavigate} from "react-router-dom"
import {useAPIContext} from '../../contexts/APIContext'

export default function AllCategories(props) {
    const zhaner_arr = [
        "Drama",
        "Science-Fiction",
        "Thriller",
        "Action",
        "Crime",
        "Horror",
        "Romance",
        "Adventure",
        "Espionage",
        "Music",
        "Supernatural",
        "Fantasy",
        "Family",
        "Anime",
        "History",
        "Comedy",
        "Mystery",
        "Medical",
        "Western",
        "Legal",
        "War",
        "Sports"
    ]
    let {dataApp, urlMyListAndAllCategories, setUrlMyListAndAllCategories, setIndex} = useAPIContext()
    // const [over, setOver] = useState(false);
    const [over1, setOver1] = useState(false)
    const [category, setCategory] = useState()
    const [filterData, setFilterData] = useState([])
    const navigate = useNavigate()

    function showCategory(category) {
        setCategory(category)
        let filterData1 = dataApp.filter((element) =>
            element.genres.includes(category)
        )
        setFilterData(filterData1)
        setOver1(!over1)
    }


    function changMainMovieFromHear(id) {
        let index2 = dataApp.findIndex(element => element.id === id)
        setIndex(index2)
        navigate('/')
        setUrlMyListAndAllCategories('/profil')
    }

    return (
        <div>
            <div className="menu_catgeris">
                <ul className="ul_categorys">
                    {zhaner_arr.map((ele, i) => (
                        <li key={i} className="li_categorys">
                            <button className="btn_li_cat" onClick={() => showCategory(ele)}>
                                {ele}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{display: over1 ? "flex" : "none"}} className="div_parent_list_catgory">
                {filterData?.map((element) => (
                    <button className="div_list_allcatgory" onClick={() => changMainMovieFromHear(element.id)}>
                        <div>{element.name}</div>
                        <img src={element.image.medium} alt="" className="img_allcatgory"/>
                    </button>
                ))}
            </div>
        </div>
    )
}

//  Drama', 'Science-Fiction', 'Thriller,
//  'Action', 'Crime',
//  'Horror', 'Romance',
//  'Thriller' , 'Adventure','Espionage',
//  'Music','Supernatural','Fantasy',
// 'Adventure', 'Family','Anime',
//  'History', 'Comedy','Mystery', 'Mystery',
//  'Medical', 'Western', 'Legal',
// 'War', 'Sports', 'Espionage'
