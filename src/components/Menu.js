import menuItem1 from '../assets/menu/menu-item-1.png';
import menuItem2 from '../assets/menu/menu-item-2.png';
import menuItem3 from '../assets/menu/menu-item-3.png';
import menuItem4 from '../assets/menu/menu-item-4.png';
import menuItem5 from '../assets/menu/menu-item-5.png';
import menuItem6 from '../assets/menu/menu-item-6.png';
import { Button } from 'react-bootstrap';
import '../App.css';

export default function Menu(){
    return(

    <section id="menu" class="menu section">

      <div class="container section-title" data-aos="fade-up">
        <p><span>Check Our</span> <span class="description-title">Top Sellings Dishes</span></p>
      </div>

      <div class="container">

        <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

          <div class="tab-pane fade active show" id="menu-starters">

            <div class="tab-header text-center">
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href={menuItem1} class="glightbox"><img src={menuItem1} class="menu-img img-fluid" alt=""/></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem2} class="glightbox"><img src={menuItem2} class="menu-img img-fluid" alt=""/></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem3} class="glightbox"><img src={menuItem3} class="menu-img img-fluid" alt=""/></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem4} class="glightbox"><img src={menuItem4} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem5} class="glightbox"><img src={menuItem5} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem6} class="glightbox"><img src={menuItem6} class="menu-img img-fluid" alt=""/></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

          <div class="tab-pane fade" id="menu-breakfast">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Breakfast</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href={menuItem1} class="glightbox"><img src={menuItem1} class="menu-img img-fluid" alt=""/></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem2} class="glightbox"><img src={menuItem2} class="menu-img img-fluid" alt=""/></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem3} class="glightbox"><img src={menuItem3} class="menu-img img-fluid" alt=""/></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem4} class="glightbox"><img src={menuItem4} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem5} class="glightbox"><img src={menuItem5} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem6} class="glightbox"><img src={menuItem6} class="menu-img img-fluid" alt=""/></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

          <div class="tab-pane fade" id="menu-lunch">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Lunch</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href={menuItem1} class="glightbox"><img src={menuItem1} class="menu-img img-fluid" alt=""/></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem2} class="glightbox"><img src={menuItem2} class="menu-img img-fluid" alt=""/></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem3} class="glightbox"><img src={menuItem3} class="menu-img img-fluid" alt=""/></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem4} class="glightbox"><img src={menuItem4} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem5} class="glightbox"><img src={menuItem5} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem6} class="glightbox"><img src={menuItem6} class="menu-img img-fluid" alt=""/></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

          <div class="tab-pane fade" id="menu-dinner">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Dinner</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href={menuItem1} class="glightbox"><img src={menuItem1} class="menu-img img-fluid" alt=""/></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem2} class="glightbox"><img src={menuItem2} class="menu-img img-fluid" alt=""/></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem3} class="glightbox"><img src={menuItem3} class="menu-img img-fluid" alt=""/></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem4} class="glightbox"><img src={menuItem4} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem5} class="glightbox"><img src={menuItem5} class="menu-img img-fluid" alt=""/></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href={menuItem6} class="glightbox"><img src={menuItem6} class="menu-img img-fluid" alt=""/></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>   
)
};