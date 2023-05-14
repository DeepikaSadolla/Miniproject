import React, { Component, useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import {Link} from 'react-router-dom';
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./Login";
  };
  return (
    <Layout> 
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
         </button>
          <Link to={"/menu"}><button> Courses</button></Link>
       </div>
      </div>
    </div>
    </Layout>
  );
}
