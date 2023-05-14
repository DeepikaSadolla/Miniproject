// import logo from './logo.svg';
// import './App.css';
// import Navs from './components/Navbar'
import Main from './components/Main'

// function App() {
//   return (
//     <>
//     {/* <Nav /> */}
    
//     <Main />
//     <Nav
//     </>
//      );
//  }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login  from './pages/login_component';
import Signin  from './pages/signup_component';
import UserDetails from './pages/userDetails';
// import  Course from './components/Course';
import TCourse from './components/TCourse';
import SCourse from './components/SCourse';
import Uploader from './Uploader';
 import Student from './components/Student';
 import Teacher from './components/Teacher';
import Dashboard from './pages/Dashboard.jsx';



import About1 from './pages/About.jsx';
import Comment from './pages/Comment.jsx';

import Course from './pages/Course.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/tcourse" element={<TCourse />} />
          <Route path="/scourse" element={<SCourse />} />
          <Route path="/uploader" element={<Uploader />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/comment" element={<Comment />} />
          
        
          <Route path="/course" element={<Course />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;