// import logo from './logo.svg';
import './App.css';
import SimpleSlider from './SimpleSlider';
import SignIn from './comps/sign/SignIn';
import Movie from './movie';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'
import Profile from './navBar/Profile';
import MyList from './navBar/MyList';

function App() {
  return (
    <Router>
      <Routes>
<Route path='/' element={<Movie/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/myList' element={<MyList/>}/>

      </Routes>
    
  
    </Router>
  );
}

export default App;
