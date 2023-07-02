import React, {useState} from "react"
import "./profile.css"
import Details from "./Details"
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import AllCategory from "./AllCategory"
// import { doc, getFirestore, updateDoc } from "firebase/firestore";
import {FiHome} from "react-icons/fi"

export default function Profile(props) {
    // const { user } = useContext(APIContext);
    const [over, setOver] = useState(false)
    const [over1, setOver1] = useState(false)
    const [over2, setOver2] = useState(false)
    const navigate = useNavigate()


    // "Western","War","Sports","Music","Espionage","Anime","History",

    // const [arr_zaner, setArr_zaner] = useState([]);
    // const db = getFirestore();


    function changeCatgorys() {
        // if (over || over2) {
        //   setOver1(false);
        //   setOver2(false);
        //   setOver(true);
        // } else {
        //   setOver(true);
        //   setOver1(false);
        //   setOver2(false);
        // }
        navigate('/changeCatgoreis')

    }

    function changeDatiles() {
        if (over1 || over2) {
            setOver(false)
            setOver2(false)
            setOver1(true)
        } else {
            setOver1(true)
            setOver(false)
            setOver2(false)
        }
        // navigate('/detiles')
    }

    function cangeAllCatgorys() {
        if (over || over1) {
            setOver(false)
            setOver1(false)
            setOver2(true)
        } else {
            setOver2(true)
            setOver1(false)
            setOver(false)
        }
        // navigate('/allcatgory');
    }


    return (
        <div className="main_profile">
            <div className="div_btn_profile">
                <Link className="btn_profile" to="/changeCatgoreis">
                    Change categories
                </Link>
                {/* onClick={changeCatgorys} */}
                <button className="btn_profile" onClick={changeDatiles}>
                    my details
                </button>

                <button className="btn_profile" onClick={cangeAllCatgorys}>
                    all categories
                </button>
            </div>
            <div className="list_catgeris">
                <Routes>

                    <Route path="/changeCatgoreis" element={<changeCatgorys/>}/>
                    <Route path="/detiles" element={<Details/>}/>
                    <Route path="/allCatgoreis" element={<AllCategory/>}/>

                </Routes>
            </div>


            <div>
                <Link className="back_home" to={"/"}>
                    <FiHome/> home
                </Link>

            </div>
        </div>
    )
}


{/* <div style={{ display: over1 ? "block" : "none" }}>
          <Details />
        </div> */
}

{/* <div
          style={{ display: over2 ? "block" : "none" }}
          className="div_AllCategory"
        >
          <AllCategory />
        </div> */
}