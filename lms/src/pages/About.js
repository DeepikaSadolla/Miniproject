import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h5">Welcome To e-Tutoria</Typography>
        <p style={{fontFamily:"Arial"}}>
       . An LMS that is equipped with user handling functionality, managing courses and course materials, 
       and maintaining a library have been the focus of the project. It also provides multiple features for
        different types of users. Some of its features include signing up as an instructor or student where 
        instructor can create courses, upload materials either as PDFs or Videos and students can enroll 
        courses of their interest.This project mainly focuses on efficiently building a reliable and secure 
        LMS that will provide its services free 
        of charge so that students can have a free and uninterrupted learning experience
        </p>
        
        
      </Box>
    </Layout>
  );
};

export default About;
