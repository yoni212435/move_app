import { doc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../App";

export default function ChangeCatgoreis() {
  const genrreList = [
    "Drama",
    "Science-Fiction",
    "Thriller",
    "Action",
    "Crime",
    "Horror",
    "Romance",
    "Adventure",
    "Supernatural",
    "Fantasy",
    "Family",
    "Comedy",
    "Mystery",
    "Medical",
    "Legal",
  ];

  const [arr_zaner, setArr_zaner] = useState([]);
  const db = getFirestore();
  const { user } = useContext(APIContext);
  function updetDbCatgories() {
    if (arr_zaner.length > 0) {
      updateDoc(doc(db, "users", user.docId), { zhaner: arr_zaner });
    }
  }

  useEffect(() => {
    updetDbCatgories();
  }, [arr_zaner.length]);

  return (
    <div>
      {genrreList.map((el, i) => (
        <div
          key={i}
          className="chak_box"
          
        >
          <label htmlFor="myCheckbox" className="lable_class">
            {" "}
            {el}{" "}
          </label>
          <input
            type="checkbox"
            name={el}
            onChange={(e) => {
              if (arr_zaner.length >= 3) {
                alert("You have up to three choices");
                e.target.checked = false;
              }
              console.log(arr_zaner);
              if (e.target.checked) {
                setArr_zaner([...arr_zaner, el]);
              } else {
                let newArrey = arr_zaner?.filter((ele) => ele !== el);
                setArr_zaner(newArrey);
              }
            }}
          />
        </div>
      ))}

      <div
        
        className="name_of_catgorys_slider"
      >
        <h5 className="">The existing categories</h5>
        <div>{user?.zhaner[0]}</div>
        <div>{user?.zhaner[1]}</div>
        <div>{user?.zhaner[2]}</div>
      </div>
    </div>
  );
}
