import React from 'react'

export default function Test(props) {
    let arr_data = props?.data;
    // console.log(props?.data?.[i].genres);
console.log(arr_data);
    let Drama_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Drama'))
    console.log(Drama_arr);
    let  Science_Fiction_arr = arr_data?.filter((e)=>e.genres?.find(v=>v==' Science-Fiction'))
    console.log(Science_Fiction_arr);
    let Thriller_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Thriller'))
    console.log(Thriller_arr);
    let Action_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Action'))
    console.log(Action_arr);
    let Crime_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Crime'))
    console.log(Crime_arr);
    let Horror_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Horror'))
    console.log(Horror_arr);
    let Romance_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Romance'))
    console.log(Romance_arr);
    let Adventure_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Adventure'))
    console.log(Adventure_arr);
    let Espionage_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Espionage'))
    console.log(Espionage_arr);
    let Music_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Music'))
    console.log(Music_arr);
    let Supernatural_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Supernatural'))
    console.log(Supernatural_arr);
    let Fantasy_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Fantasy'))
    console.log(Fantasy_arr);
    let Family_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Family'))
    console.log(Family_arr);
    let Anime_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Anime'))
    console.log(Anime_arr );
    let History_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='History'))
    console.log(History_arr);
    let Comedy_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Comedy'))
    console.log(Comedy_arr);
    let Mystery_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Mystery'))
    console.log(Mystery_arr);
    let Medical_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Medical'))
    
    let Western_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Western'))
    
    let Legal_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Legal'))
    
    let War_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='War'))
    
    let Sports_arr = arr_data?.filter((e)=>e.genres?.find(v=>v=='Sports'))
    
    // לתת למתמש אופציה של בחירת קטגוריות ואופציה לשינו בחירתו (יהיה בתוך דף הגדרות)
    

   
    
    
   
    // console.log(Drama_arr);
  return (
    <div>
{
    // props.data.map((e)=> console.log())
}
    </div>
  )
}

// Drama', 'Science-Fiction', 'Thriller
// 'Action', 'Crime'
// 'Horror', 'Romance'
// 'Thriller' , 'Adventure','Espionage'
// 'Music','Supernatural','Fantasy'
// 'Adventure', 'Family','Anime'
// 'History', 'Comedy','Mystery', 'Mystery'
// 'Medical', 'Western', 'Legal'
// 'War', 'Sports', 'Espionage'