import React, { useState } from 'react';
import './Side.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"MyProfile",
            icon:<FaUserAlt/>
        },
        {
            path:"/menu",
            name:"Courses",
            icon:<FaThList/>
        },
        {
            path:"/faq",
            name:"FAQ",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Feedback",
            icon:<FaCommentAlt/>
        }
       
        
        
    ]
    return (
        <div className="container">
        
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h3 style={{display: isOpen ? "block" : "none"}} className="logo">E-Tutoria</h3>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;