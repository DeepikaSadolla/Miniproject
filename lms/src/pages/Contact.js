import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      {/* <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h3">Contact My Clinic</Typography>
        <p>
          <h2>Opening Hours</h2>
          Book your consultation<br/>
          Monday to Sunday :<br/>
          10.00am to 7.00pm
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
      <div class="contact_us">
    <h1>Contact Us</h1>
    <div class="gmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698201728
        !2d78.26795904304946!3d17.412299801300147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dae
        aebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1641406007229!5m2!1sen!2sin" width="100%" height="450" ></iframe>
    </div>
    <div class="contact_content">
        <p style={{fontFamily:"Arial"}}><b>address: telangana,india</b></p>
        <p style={{fontFamily:"Arial"}}><b>phone: +916301920054</b></p>
        <p style={{fontFamily:"Arial"}}><b>mail: abc123@gmail.com </b></p>            
    </div>
</div>
  
  
 
    </Layout>
  );
};

export default Contact;