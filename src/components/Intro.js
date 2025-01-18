import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import heroimg from '../assets/hero-img.png';

function Intro() {
    return (
    <section id="hero" class="hero section light-background" style={{ marginTop: '3%' }}>
    

      <div class="container">
        <div class="row gy-4 justify-content-center justify-content-lg-between">
          <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Enjoy Your Healthy<br/>Delicious Food</h1>
            <p data-aos="fade-up" data-aos-delay="100">Crafted with passion, served with love</p>
            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#book-a-table" class="btn-get-started" style={{ textDecoration: 'none' }}>Book a Table</a>
              <a href="#" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src = {heroimg} class="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>
    );
    }

export default Intro;
