import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../assets/videoBg.mp4";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
         <div className='main'>
         

         <div className='overlay'></div>
         <video className='videoTag' autoPlay loop muted>
    <source src={Banner} type='video/mp4' />
</video>
       <div className='content'>
       <h1 className='h11' > e-Tutoria</h1>
       <p className='h12' >A Smart Learning Platform</p>
     <div className='div1'>  
     <Link to="/teacher">
            <button>Instructor</button>
          </Link>
         <Link to="/student">
            <button>Student</button>
          </Link>
       
       </div>
     </div>
     </div>
      {/* style={{ backgroundImage: `url(${Banner})`  }} */}
      {/* <div className="home"    >
       
        <div className="headerContainer">
           
           
        </div>
      </div> */}
      {/* <div> */}
        {/* <h1>Doctors Panel</h1>
        {/* <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <img src="https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?b=1&s=170667a&w=0&k=20&c=fNdTEAw5B_gj38mP4lxfj_PMALGz_scFnmcUrOMQ8kg="/>
        <img src="https://media.istockphoto.com/id/1455610161/photo/portrait-of-a-senior-black-doctor-looking-at-the-camera.jpg?b=1&s=170667a&w=0&k=20&c=Rx_K2yJm4kZaizKkJsy75ii3gV7pr_Pl3u787Z9k1QM="/> */}
      {/* </div>
      <div>
        <h1>Our Services</h1></div> */} 
    </Layout>
    
  );
};

export default Home;
