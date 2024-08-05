import React from 'react';
import './css/home.css';
import banner from './images/banner.PNG';
import photo8 from './images/photo8.jpg';
import car3 from './images/car3.jpg';
import car1 from './images/car1.jpg';
import car2 from './images/car2.jpg';
import car6 from './images/car6.jpg';
import car5 from './images/car5.jpg';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import {Card,CardGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCar,faCalendar,faWallet} from "@fortawesome/free-solid-svg-icons";

class Subscription extends React.Component {
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
                        <NavLink to='/offer' activeStyle>Offer</NavLink>
                        <NavLink to='/subscription' activeStyle>Subscription</NavLink>
                        <NavLink to='/about' activeStyle>About</NavLink>
                        <NavLink to='/services' activeStyle>Services</NavLink>
                        <NavLink to='/contact' activeStyle>Contact</NavLink>
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
                <h1 style={{textAlign:'center'}}>Top Selling Cars</h1>
                <div className="main-box">
                    <CardGroup>
                      <Card>
                      <img src={car1} alt="logo" height="100%" width="100%"/>
                        <Card.Body>
                          <Card.Title>Go Anywhere</Card.Title>
                          <Card.Text>
                          Our cars have all-India permits. Just remember to pay state tolls and entry taxes.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <img src={car2} alt="logo" height="100%" width="100%"/>
                        <Card.Body>
                          <Card.Title>24x7 Roadside Assistance</Card.Title>
                          <Card.Text>
                          We have round-the-clock, pan India partners. Help is never far away from you.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <img src={car3} alt="logo" height="100%" width="100%"/>
                        <Card.Body>
                          <Card.Title>24x7 Roadside Assistance</Card.Title>
                          <Card.Text>
                          We have round-the-clock, pan India partners. Help is never far away from you.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                </CardGroup>
                </div>
                <br></br>
                <br></br>
                <div className="main-box">
                    <div className="Row">
                        <div className="Col" style={{float:'left',width:'50%',padding:'5px'}}>
                            <img src={car5} alt="logo" height="100%" width="100%"/>
                        </div>
                        <div className="Col" style={{float:'right',width:'50%',padding:'5px',fontFamily:'Ubuntu,sans-serif'}}>
                            <h3>Why Subscribe to a Personal Car?</h3>
                            <p>A pandemic (from Greek πᾶν, pan, "all" and δῆμος, demos, "local people" the 'crowd') is an epidemic of an infectious disease that has spread across a large region, for instance multiple continents or worldwide, affecting a substantial number of people. A widespread endemic disease with a stable number of infected people is not a pandemic. Widespread endemic diseases with a stable number of infected people such as recurrences of seasonal influenza are generally excluded as they occur simultaneously in large regions of the globe rather than being spread worldwide.</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="main-box">
                <div className="Row">
                        <div className="Col" style={{float:'left',width:'50%',padding:'5px',fontFamily:'Ubuntu,sans-serif'}}>
                            <h3>Why Subscribe to a Personal Car?</h3>
                            <p>A pandemic (from Greek πᾶν, pan, "all" and δῆμος, demos, "local people" the 'crowd') is an epidemic of an infectious disease that has spread across a large region, for instance multiple continents or worldwide, affecting a substantial number of people. A widespread endemic disease with a stable number of infected people is not a pandemic. Widespread endemic diseases with a stable number of infected people such as recurrences of seasonal influenza are generally excluded as they occur simultaneously in large regions of the globe rather than being spread worldwide.</p>
                        </div>
                        <div className="Col" style={{float:'right',width:'50%',padding:'5px'}}>
                            <img src={car6} alt="logo" height="100%" width="100%"/>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="main-box">
                <Card style={{ width: '18rem' ,height:'15rem'}}>
                    <Card.Body>
                        <Card.Title>01</Card.Title>
                        <Card.Text>
                        <h3>Select A Car</h3>
                        <br></br>
                        <p>We offer 45+ cars in your city.Check them out here</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' ,height:'15rem'}}>
                    <Card.Body>
                        <Card.Title>02</Card.Title>
                        <Card.Text>
                        <h3>Apply Referral Code</h3>
                        <br></br>
                        <p>Use referral code.Know More</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',height:'15rem' }}>
                    <Card.Body>
                        <Card.Title>03</Card.Title>
                        <Card.Text>
                        <h3>Pay & Book</h3>
                        <br></br>
                        <p>Choose from multiple payment options.We recommend you to select
                            Instapay for lower security deposit!</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',height:'15rem' }}>
                    <Card.Body>
                        <Card.Title>04</Card.Title>
                        <Card.Text>
                        <h3>Delivery</h3>
                        <br></br>
                        <p>We will deliver the car at your doorstep</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <br></br>
                <div className="main-box">
                  <div className="text-big3">
                     <div className="row" >
                        <div className="col-4 img-fluid">
                        <FontAwesomeIcon icon={faCalendar} size="3x" pull="center" />
                        <br></br>
                            <h3>Pick Dates</h3>
                            <p>Choose the dates you want to share your car using Zoomcar Subscription app.</p>
                        </div>
                        <div className="col-4 img-fluid">
                        <FontAwesomeIcon icon={faCar} size="3x" pull="center" />
                        <br></br>
                        <h3>Booking</h3>
                        <p>We will allocate booking subject to your car's according to the availability you have choosen</p>
                        </div>
                        <div className="col-4 img-fluid">
                        <FontAwesomeIcon icon={faWallet} size="3x" pull="center" />
                        <br></br>
                        <h3>Earn</h3>
                        <p>Earning will be credited in the first week of every month or adjusted against your monthly subscription.</p>
                        </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>
                   <div className="footer-wrapper">
                     <h4>About Us</h4>
                     <ul class="Container" style={{justifyContent: "normal"}}>
                       <li>Zoomcar Team</li><span></span>
                       <li>Zoomcar Subscription</li><span></span>
                       <li>Zoomcar Blog</li><span></span>
                       <li>Careers @ Zoomcar</li><span></span>
                       <li>Location & Cars</li><span></span>
                       <li>Self Drive Cars</li><span></span>
                       <li>Invest via OurCrowd</li><span></span>
                     </ul>
                     <h4>Cities</h4>
                     <ul className="Container">
                       <li><span>Self Drive Cars in Bangalore</span></li>
                       <li><span>Self Drive Cars in Pune</span></li>
                       <li>Self Drive Cars in Delhi</li><span></span>
                       <li>Self Drive Cars in Chennai</li><span></span>
                       <li>Self Drive Cars in Hyderabad</li><span></span>
                       <li>Self Drive Cars in Chandigarh</li><span></span>
                       <li>Slef Drive Cars in Ahmedabad</li><span></span>
                       <li>Slef Drive Cars in Coimbatore</li><span></span>
                       <li>Slef Drive Cars in Indore</li><span></span>
                       <li>Self Drive Cars in Ludhiana</li><span></span>
                       <li>Self Drive Cars in Mysore</li><span></span>
                       <li>Slef Drive Cars in Nagpur</li><span></span>
                     </ul>
                     <h4>Airport Services</h4>
                     <ul className="Container">
                       <li>Car Rental From Bangalore Airport</li>
                       <li>Car Rental From Pune Airport</li>
                       <li>Car Rental From Delhi Airport</li>
                       <li>Car Rental From Chennai Airport</li>
                       <li>Car Rental From Hyderabad Airport</li>
                       <li>Car Rental From Chadigarh Airport</li>
                       <li>Car Rental From Ahmedabad Airport</li>
                       <li>Car Rental From Coimbatore Airport</li>
                       <li>Car Rental From Chandigarh Airport</li>
                       <li>Car Rental From Chennai Airport</li>
                       <li>Car Rental From Indore Airport</li>
                       <li>Car Rental From Vizag Airport</li>
                     </ul>
                   </div>
                </div>
            </>
        )
    }
}

export default Subscription;