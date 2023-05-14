import React from "react"
 
import 'bootstrap/dist/css/bootstrap.min.css';
function Course() {
    return (
<div class="container-fluid py-5">
    <div class="container">
        <div class="row g-5"> 
            
            <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light text-center p-5">
                    
                     <a href="soil.html"><h4>JAVA</h4></a>
                    <p class="mb-0">nearby soil testing centers for crop productivity</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light text-center p-5">
                    
                    <a href="demo.html"><h4>C</h4></a>
                    <p class="mb-0">Recommendation of crop to be grown based on the topology of the farm</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light text-center p-5">
                    {/* <img src="image/pred.jpeg"> */}
                    <a href="disease_detection/index.html"><h4>PYTHON</h4></a>
                    <p class="mb-0">Detection of diseases in plants from images of leaves and frits.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light text-center p-5">
                    {/* <img src="image/wea.jpeg" width="200px"height="200px"> */}
                    <a href="weather/AYNA-main/weatherwebsite/index.html"><h4>OPERATING SYSTEMS</h4></a>
                    <p class="mb-0">Detection of weather for altering farmers</p>
                </div>
            </div>
            
           
            <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light text-center p-5">
                    {/* <img src="image/adv.jpeg" width="250px"height="280px"> */}
                    <a href="adv.html"><h4>REACT</h4></a>
                    <p class="mb-0">A digital interaction with agronimists</p>
                </div>r
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light text-center p-5">
                    {/* <img src="image/mart.jpeg"width="200px"height="200px" > */}
                    <a href="marketing/index.html"><h4>COMPUTER NETWORKS</h4></a>
                    <p class="mb-0">Direct availability of farmer's crops</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="service-item bg-light text-center p-5">
                    {/* <img src="image/crop.jpg"width="200px"height="200px" > */}
                    <a href="insuranceIndex.html"><h4>COMPUTER ORGANISATION</h4></a>
                    <p class="mb-0"></p>
                </div>
            </div>

            
        </div>
    </div>
</div>
    )}
    export default Course;