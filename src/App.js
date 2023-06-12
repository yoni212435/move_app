// import logo from './logo.svg';
import "./App.css";
// import SimpleSlider from './SimpleSlider';
import SignIn from "./comps/sign/SignIn";
import Movie from "./movie";
import {
  BrowserRouter as Router,Route, Routes,useNavigate,} from "react-router-dom";
import Profile from "./comps/navBar/Profile";
import MyList from "./comps/navBar/MyList";
import SignUp from "./comps/sign/SignUp";
import { createContext, useEffect, useState } from "react";
import { app } from "./Firebase";
import {addDoc, collection, doc, getDocs, getFirestore, onSnapshot, query, updateDoc, where} from 'firebase/firestore'
import { useLocation, useParams} from 'react-router-dom';
export const APIContext = createContext();

function App() {


  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  const [user, setUser] = useState({});
  const [dataApp, setDataApp] = useState([]);
  const [listAr, setListAr] = useState([]);
  const db = getFirestore();
  const colUsers = collection(db,'users');
  const [url,setUrl] = useState('');
 


  async function  updateToMyList(arr){
    try{
      
    if(user.id){
      await updateDoc(doc(db,'users',user.docId),{myList:arr})
      
    }}catch(error){console.log(error);}
  }

  function changeUrl(pathname){
    setUrl(pathname); 
  }

  

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) {
      navigate("/signIn");
      
    }
  }, [user.id]);

  function getDoc(){
    getDoc(doc(db,'users','docId'))
  }
  

  useEffect(()=>{
    updateListAr();
    
  },[user.myList])

  async function handelUserObjFirebase(){
    
    if(user.id){
      const data = await getDocs(query(colUsers,where('id','==',user.id))) ;
      
     if(data.docs[0]){
      setUser({...data.docs[0].data(),docId:data.docs[0].id,email:user.email })
    
     }else{
      addDoc(colUsers,{id:user.id,zhaner:[],myList:[]})
     }
    }
  }
  
  function updateListAr(){
    if(user.id){
      setListAr(user.myList) 
    }
  }

  function changeIndex(num){
return num;
  }
  

  return (
    <APIContext.Provider value={{ dataApp, setDataApp ,setUser, handelUserObjFirebase ,user , updateToMyList ,updateListAr, url,changeUrl ,changeIndex,windowSize}}>
      <Routes>
        <Route path="/" element={<Movie listAr={listAr} />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myList" element={<MyList listAr={listAr} />} />
      </Routes>
    </APIContext.Provider>
  );
}

export default App;
