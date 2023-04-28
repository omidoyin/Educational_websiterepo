
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import CoursesHome from './components/allcourses/CoursesHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/about' element= {<About/>} />
          <Route path='/courses' element= {<CoursesHome/>} />
          <Route path='/team' element= {<Team />} />
          <Route path='/pricing' element= {<Price />} />
        </Routes>
      </Router>


    </div>
    
  );
}

export default App;
