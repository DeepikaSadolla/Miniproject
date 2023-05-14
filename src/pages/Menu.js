import React from "react";
import { MenuList } from "../data/data";
import './Menu.css'
import Layout from "./../components/Layout/Layout";
import {Link} from "react-router-dom"
import Side from "./../components/Sidebar";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <div style={{display:"flex"}}>
      <div style={{}} className="col-md-2">
    <Side/>
    </div>
    <div style={{}} className="col-md-10">
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "40px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                  
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
            <Link to="/uploader"><button  class="button button1" variant
          ="primary">+</button></Link>  
          </Card>
           
        ))}
      </Box>
      </div>
      </div>
    </Layout>
  );
};

export default Menu;