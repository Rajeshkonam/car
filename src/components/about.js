import React from 'react';
import './css/home.css';
import banner from './images/banner.PNG';
import photo8 from './images/photo8.jpg';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import {Form} from 'react-bootstrap';

class About extends React.Component {
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
                        
                    </NavMenu>
                </Nav>
                </div>
                <div>
                    <div className="full-box">
                        <img src={photo8} alt="logo" height="100%" width="100%"/>
                    </div>
                </div>
                <div>
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

export default About;