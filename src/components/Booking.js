import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../App.css';
import reservationImage from '../assets/reservation.jpg';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap';

export default function Booking(){

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
  
    const handleSubmit = () => {
      setIsSubmitting(true);
      setIsCompleted(false);
  
      // Simulate a network request
      setTimeout(() => {
        setIsSubmitting(false);
        setIsCompleted(true);
      }, 2000); // Adjust delay as needed
    }
    
  return(
    
    <section id="book-a-table" class="book-a-table section">

      <div class="container section-title" data-aos="fade-up">
      
        <p><span>Book Your</span> <span class="description-title">Stay With Us<br/></span></p>
        <br/>

      <div class="container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '15%'}}>

        <div class="row g-0" data-aos="fade-up" data-aos-delay="100">

          {/* <div class="col-lg-4 reservation-img" style={{background-image: 'url(assets/img/reservation.jpg)';}}></div> */}
          {/* <div class="col-lg-4 reservation-img" style={{backgroundImage: "url({reservationImage})"}}></div> */}

          <div class="col-lg-8 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay="200">
            <Form class="php-email-form">
              <div class="row gy-4">
                <div class="col-lg-4 col-md-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required=""/>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required=""/>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" required=""/>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="date" name="date" class="form-control" id="date" placeholder="Date" required=""/>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="time" class="form-control" name="time" id="time" placeholder="Time" required=""/>
                </div>
                <div class="col-lg-4 col-md-6">
                  <input type="number" class="form-control" name="people" id="people" placeholder="# of people" required=""/>
                </div>
              </div>

              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
              </div>

              <br/>
              <div className="d-grid gap-2">
                <button
                  className={`btn btn-danger position-relative ${
                    isSubmitting ? 'loading' : ''
                  } ${isCompleted ? 'btn-success' : ''}`}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Submitting...
                    </>
                  ) : isCompleted ? (
                    'Done!'
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
              
            </Form>
          </div>

        </div>

      </div>

      </div>

    </section>
  )
};