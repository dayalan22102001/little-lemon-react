import React from 'react';
import statsbg from '../assets/stats-bg.jpg';
import '../App.css';

const WhyChooseUs = () => (
<div>
<section id="why-us" class="why-us section light-background">

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div class="why-box">
        <h3>Why Choose Little Lemon</h3>
        <p>
        Our restaurant is a haven for food lovers, offering a delightful fusion of traditional and modern cuisines. We pride ourselves on delivering an exceptional dining experience with a focus on fresh, high-quality ingredients, innovative recipes, and a welcoming atmosphere. Whether you're here for a quick bite, a family gathering, or a romantic evening, our diverse menu and attentive service make every visit memorable.


        </p>
        <div class="text-center">
          <a href="#" class="more-btn"><span>Learn More</span> <i class="bi bi-chevron-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-lg-8 d-flex align-items-stretch">
      <div class="row gy-4" data-aos="fade-up" data-aos-delay="200">

        <div class="col-xl-4">
          <div class="icon-box d-flex flex-column justify-content-center align-items-center">
            <i class="bi bi-clipboard-data"></i>
            <h4>Exceptional Quality</h4>
            <p>Every dish is prepared with the finest ingredients and utmost care to ensure an unforgettable dining experience.</p>
          </div>
        </div>

        <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
          <div class="icon-box d-flex flex-column justify-content-center align-items-center">
            <i class="bi bi-gem"></i>
            <h4>Customer-Centric Service</h4>
            <p>We prioritize your satisfaction with friendly staff and prompt service that makes you feel right at home.</p>
          </div>
        </div>

        <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
          <div class="icon-box d-flex flex-column justify-content-center align-items-center">
            <i class="bi bi-inboxes"></i>
            <h4>Unique Dining Experience</h4>
            <p>From our cozy ambiance to signature recipes, we provide a perfect setting for every occasion.</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</div>
</section>
<section id="stats" class="stats section dark-background">

<img src={statsbg} alt="" data-aos="fade-in"/>

<div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"><h1>232</h1></span>
        <p>Cities</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
        <h1>521</h1>
        <p>Outlets</p>
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
        <h1>24/7</h1>
        <p>Hours Of Support</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
        <h1>32k +</h1>
        <p>Workers</p>
      </div>
    </div>

  </div>

</div>

</section>

</div>
);

export default WhyChooseUs;
