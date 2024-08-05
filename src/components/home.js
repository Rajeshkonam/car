import React from 'react';
import './css/home.css';
import banner from './images/banner.PNG';
import photo8 from './images/photo8.jpg';
import photo4 from "./images/photo4.jpg";
import photo5 from "./images/photo5.jpg";
import photo from "./images/photo.jpg";
import ban from "./images/ban.PNG";
import {Nav,NavLink,NavMenu} from './NavbarElements';
import {Carousel,Card,CardGroup,Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGasPump, faCoins, faGift, faLocationArrow, faRoad, faCarCrash,faIdCard,faUnlock,faCar,faRoute,faStar ,faSmile,faTachometerAlt} from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
    render(){
        return(
            <>
                <div>
                <Nav>
                    <NavLink to="/" className="logo">
                        <img src={banner} alt='logo' />
                    </NavLink>
                    <NavMenu>
                        <NavLink to='/' activeStyle>Home</NavLink>
                        <NavLink to='/offers' activeStyle>Offer</NavLink>
                        <NavLink to='/subscription' activeStyle></NavLink>
                        <NavLink to='/about' activeStyle>About</NavLink>
                        <NavLink to='/services' activeStyle></NavLink>
                        <NavLink to='/contact' activeStyle></NavLink>
                        <NavLink to='/login' activeStyle>Login</NavLink>
                        <NavLink to='/register' activeStyle>Register</NavLink>
                        <NavLink to='/admin' activeStyle>Admin</NavLink>
                    </NavMenu>
                </Nav>
                </div>
                <div>
                    <div className="full-box">
                        <img src={photo8} alt="logo" height="100%" width="100%"/>
                    </div>
                </div>
                <br></br>
                <div className="advantage">
                    <h1 style={{textAlign:'center'}}>The Car Advantages</h1>
                    <p style={{textAlign:'center'}}>We simplified car rentals, so you can focus on what's important to you.</p>
                    <CardGroup>
                      <Card>
                      <FontAwesomeIcon icon={faGasPump} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Fuel Cost Included</Card.Title>
                          <Card.Text>
                          Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faCoins} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>No Hidden Charges</Card.Title>
                          <Card.Text>
                          Our prices include taxes and insurance.What you see is what you really pay!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faGift} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Flexi Pricing Packages</Card.Title>
                          <Card.Text>
                          One size never fits all! Choose a balance of time and kilometers that works best for you.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                    <CardGroup>
                      <Card>
                      <FontAwesomeIcon icon={faLocationArrow} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Go Anywhere</Card.Title>
                          <Card.Text>
                          Our cars have all-India permits. Just remember to pay state tolls and entry taxes.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faRoad} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>24x7 Roadside Assistance</Card.Title>
                          <Card.Text>
                          We have round-the-clock, pan India partners. Help is never far away from you.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <FontAwesomeIcon icon={faCarCrash} size="7x" pull="right" />
                        <Card.Body>
                          <Card.Title>Damage Insurance</Card.Title>
                          <Card.Text>
                          All your bookings include damage insurance! Drive safe, but don’t worry! 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                </div>
                <div>
                <Carousel>
                 <Carousel.Item>
                 <img src={photo5} width="100%" height="100%"></img>
                 <Carousel.Caption>
                 <h3>First slide label</h3>
                 <p></p>
                 </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={photo4} width="100%" height="100%"></img>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={photo} width="100%" height="100%"></img>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br>
                </div>
                <div className="row" >
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faCar} size="7x" pull="center" />
                    <br></br>
                          <h3>Book</h3>
                          <p>Search for and book a car on our site.</p>
                    </div>
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faIdCard} size="7x" pull="center" />
                    <br></br>
                    <h3>UPLOAD LICENSE</h3>
                    <p>Upload your driver’s license, and pay a small security deposit.</p>
                    </div>
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faUnlock} size="7x" pull="center" />
                    <br></br>
                    <h3>UNLOCK</h3>
                    <p>We SMS your car details 20 minutes before pickup.Unlock it via the Zoomcar app.</p>
                    </div>
                    <div className="col-3 img-fluid">
                    <FontAwesomeIcon icon={faRoute} size="7x" pull="center" />
                    <br></br>
                    <h3>RETURN</h3>
                    <p>Return the car to the same location and fill the end checklist to end your trip.</p>
                    </div>
                </div>
                <div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary"><NavLink to="/register">Sign Up</NavLink></button>
                </div>
                 </div>
                <div>
                    <img src={ban} width="100%"></img>
                </div>
                <br></br>
                <div className="main-box">
                  <div className="text-big3">
                <div className="row" >
                    <div className="col-4 img-fluid">
                    <FontAwesomeIcon icon={faSmile} size="7x" pull="center" />
                    <br></br>
                          <h3>48,00,000+</h3>
                          <p>Happy Users</p>
                    </div>
                    <div className="col-4 img-fluid">
                    <FontAwesomeIcon icon={faTachometerAlt} size="7x" pull="center" />
                    <br></br>
                    <h3>36,00,000+</h3>
                    <p>Km Travelled(enough for 470 round trips to the moon!)</p>
                    </div>
                    <div className="col-4 img-fluid">
                    <FontAwesomeIcon icon={faStar} size="7x" pull="center" />
                    <br></br>
                    <h3>RATING 4.5/5</h3>
                    <p>Rated by 3,00,000+ customers over 10,00,000+ bookings</p>
                    </div>
                </div>
                </div>
                </div>
                <div className="main-box1">
                  <Form>
                    <h3>LOOKING FOR SELF DRIVE CARS IN BANGALORE?</h3>
                    <p>Bangalore being a burgeoning cosmopolitan city is witnessing a shift in culture. With youngsters now being able to establish an equal focus on work and leisure frequent road trips have now become a norm. In addition to this, the added pleasure of a self-driving has given rise in the demand for, self-drive car rentals which has emerged as the answer to many of their prayers.</p>
                    <h3>HOW MUCH DOES IT COST TO RENT A CAR FOR A DAY?</h3>
                    <p>If want to rent one out a self-drive car, choose Zoomcar, where you can pick out your self-drive car based on your travelling needs. While small self-drive cars allow you to easily manoeuvre through city traffic, sedans and SUV’s offer more comfort. Affordable prices starting at 60/hr helps you rent a car easily. Whether you want to go on a road trip from Bangalore to Coorg or just need a car to travel within the city the self-drive Zoomcar are your best solution. All Self-drive Zoomcar comes with a limited liability, enabling you to enjoy the comfort of a four-wheeler without having to invest in one, with the added benefit of not having to actually drive it. The Self-drive Zoomcar have even made travel to and from the airport easy. Avoid exorbitantly priced Bangalore airport cabs by choosing to travel in a Zoomcar instead. The Bangalore airport even has a Zoomcar parking lot where you can get a self-drive car rental as soon as you get off your flight, thus eliminating the time taken to look for a cab or hire one.</p>
                    <h3>WHAT STATES ALLOW SELF DRIVING CARS?</h3>
                    <p>Drive seamlessly:<br></br>
                      Our Self-Drive cars come with all India permits, Road-Side Assistance (RSA), vehicle insurance and provision of multiple parking sites across the city.</p>
                    <p>Book Through the App:<br></br>
                      No matter how long you need our Self Drive cars for you can conveniently hire a Self-Drive car online in Bangalore through the Zoomcar app.</p>
                    <p>Array of services:<br></br>
                      Enjoy tech-enabled booking, tracking and hassle-free payment options too. Make every special occasion memorable by opting to ride in a luxury self-drive car yourself. You could opt for it just for the sheer pleasure and experience too!</p>
                    <h3>STEPS FOR SELF DRIVE CAR BOOKING IN BANGALORE</h3>
                    <p>Drive across the city hassle free with a self-drive car from Zoomcar in the following steps:</p>
                    <ol>
                      <li>Download the Zoomcar App from the Play Store or the App Store.</li><br></br>
                      <li>Search for a car from the wide range available and book a self-drive car of your choice</li><br></br>
                      <li>Upload License and pay a small security deposit</li><br></br>
                      <li>Car details will be sent on SMS 20mins before pickup. Unlock it via the Zoomcar App</li><br></br>
                      <li>Fill the start checklist in the Zoomcar App. Grab the keys from the glove box and zoom away</li><br></br>
                        <p>After the trip, return the car and fill the end checklist from the App to end your trip. We refund your deposit if applicableBook, Drive, Repeat. Zoom On.</p>
                    </ol>
                  </Form>
                </div>
                <br></br>
            </>
        )
    }
}

export default Home;