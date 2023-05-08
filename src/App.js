
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import CoursesHome from './components/allcourses/CoursesHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

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
          <Route path='/journal' element= {<Blog />} />
          <Route path='/contact' element= {<Contact />} />
        </Routes> 
        <Footer/>
      </Router>


    </div>
    
  );
}

export default App;
