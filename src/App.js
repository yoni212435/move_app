import "./App.css";
import SignIn from "./comps/sign/SignIn";
import Movie from "./movie";
import {Route, Routes, useNavigate,} from "react-router-dom";
import Profile from "./comps/navBar/Profile";
import MyList from "./comps/navBar/MyList";
import SignUp from "./comps/sign/SignUp";
import { createContext, useEffect, useState } from "react";
import { app } from "./Firebase";
import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where,} from "firebase/firestore";
import AllCategory from "./comps/navBar/AllCategory";
import Detiles from "./comps/navBar/Detiles";
import Appburger from "./comps/navBar/appburger";
export const APIContext = createContext();

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [user, setUser] = useState({});
  const [dataApp, setDataApp] = useState([]);
  const [listAr, setListAr] = useState([]);
  const [index,setIndex] = useState(0)
  const[urlMyListAndAllCategories,setUrlMyListAndAllCategories]= useState();
  const db = getFirestore();
  const colUsers = collection(db, "users");


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  

  async function updateToMyList(arr) {
    try {
      if (user.id) {
        await updateDoc(doc(db, "users", user.docId), { myList: arr });
      }
    } catch (error) {
      console.log(error);
    }
  }

  
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) {
      navigate("/signIn");
    }
    // else{
    //   navigate("/");
    // }
  }, [user.id]);

  // function getDoc() {
  //   getDoc(doc(db, "users", "docId"));
  // }

  useEffect(() => {
    updateListAr();
  }, [user.myList]);

  async function handelUserObjFirebase() {
    if (user.id) {
      const data = await getDocs(query(colUsers, where("id", "==", user.id)));
      if (data.docs[0]) {
        setUser({
          ...data.docs[0].data(),
          docId: data.docs[0].id,
          email: user.email,
        });
      } else {
        addDoc(colUsers, { id: user.id, zhaner: ['Family','Crime','Drama'], myList: [] });
        setUser({ id: user.id, zhaner: ['Family','Crime','Drama'], myList: [] });
      }
    }
  }

  function updateListAr() {
    if (user.id) {
      setListAr(user.myList);
    }
  }

  function changeIndex(num) {
    return num;
  }

  return (
    <APIContext.Provider
      value={{
        dataApp,
        setDataApp,
        setUser,
        handelUserObjFirebase,
        user,
        updateToMyList,
        updateListAr,
        changeIndex,
        windowSize,
        setIndex,
        index,
        urlMyListAndAllCategories,
        setUrlMyListAndAllCategories
      }}
    >
      <Routes>
        <Route index element={<Movie listAr={listAr} />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/appburger" element={<Appburger/>}/>
        <Route path="/changeCatgoreis" element={<changeCatgorys/>}/>
        <Route path="/detiles" element={<Detiles/>}/>
        <Route path="/allCatgoreis" element={<AllCategory/>}/> */}
        <Route path="*" element={<h1>404 not found</h1>}/>
      </Routes>
    </APIContext.Provider>
  );
}

export default App;
