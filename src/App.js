// import logo from './logo.svg';
import './App.css';
// import SimpleSlider from './SimpleSlider';
import SignIn from './comps/sign/SignIn';
import Movie from './movie';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Profile from './navBar/Profile';
import MyList from './navBar/MyList';
import SignUp from './comps/sign/SignUp';

function App() {
  return (
    <Router>
      <Routes>
<Route path='/' element={<Movie/>}/>
<Route path='/sign' element={<SignIn/>}/>
<Route path='/ragister' element={<SignUp/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/myList' element={<MyList/>}/>

      </Routes>
    
  
    </Router>
  );
}

export default App;
