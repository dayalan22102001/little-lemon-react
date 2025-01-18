import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from '../assets/about.jpg';
import About2Image from '../assets/about-2.jpg';
import '../App.css';


const About = () => (
<div>
<section id="about" class="about section">
<div class="container section-title" data-aos="fade-up">
  <h2>About Us<br/></h2>
  <p><span>Learn More</span> <span class="description-title">About Us</span></p>
</div>

<div class="container">

  <div class="row gy-4">
    <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
      <img src={AboutImage} class="img-fluid mb-4" alt=""/>
      <br/><br/><br/>
      <div class="book-a-table">
        <h3>Book a Table</h3>
        <p>+1 234 567 8901</p>
      </div>
    </div>
    <div class="col-lg-5" data-aos="fade-up" data-aos-delay="250">
      <div class="content ps-0 ps-lg-5">
        <p class="fst-italic">
        Welcome to our restaurant, where we turn every meal into a celebration of flavor and hospitality.
        </p>
        <ul>
          <li><i class="bi bi-check-circle-fill"></i> <span>Culinary Excellence: Our chefs craft each dish with precision, blending authentic flavors and innovative techniques to deliver a menu that’s both diverse and delicious.</span></li>
          <li><i class="bi bi-check-circle-fill"></i> <span>Warm Hospitality: We believe in treating every guest like family, ensuring you feel welcomed and cared for from the moment you step in.</span></li>
          <li><i class="bi bi-check-circle-fill"></i> <span>Sustainable Practices: We prioritize locally-sourced ingredients and eco-friendly practices, making your dining experience both delightful and responsible.</span></li>
        </ul>
        <p>
        
        Thank you for choosing us. We look forward to serving you and making your time with us truly special!
        </p>

        <div class="position-relative mt-4">
          <img src={About2Image} class="img-fluid" alt=""/>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a>
        </div>
      </div>
    </div>
  </div>

</div>

</section>

</div>
);

export default About;
