import React from 'react'
import  videoBg from '../assets/videoBg.mp4'
 
import { Link } from 'react-router-dom';



const Main = () => {
  return (
    <div className='main'>
         

        <div className='overlay'></div>
      <video src ={videoBg} autoPlay loop muted/>
      <div className='content'>
      <h1 className='h11' > e-Tutoria</h1>
      <p className='h12' >A Smart Learning Platform</p>
    <div className='div1'>  
    <button component={Link} to="/posts" class='ins'>
        Instructor
      </button>
      <button component={Link} to="/posts" class='stu'>
        Student
      </button>
      
      </div>
    </div>
    </div>
  )
}

export default Main
