import React from 'react';
import './css/home.css';
import banner from './images/banner.PNG';
import photo8 from './images/photo8.jpg';
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import images from './images/images.jpg';
import download1 from './images/download1.jpg';
import images1 from './images/images1.jpg';
import download3 from './images/download3.jpg';
import {Nav,NavLink,NavMenu} from './NavbarElements';

class Offers extends React.Component {
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
                <div className="main-box"> 
                <CardGroup>
                      <Card>
                      <img src={images} alt="logo" height="100%" width="100%"/>
                        <Card.Body>
                          <Card.Title>Go Anywhere</Card.Title>
                          <Card.Text>
                          Our cars have all-India permits. Just remember to pay state tolls and entry taxes.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <img src={download1} alt="logo" height="100%" width="100%"/>
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
                <div className="main-box">
                <CardGroup>
                      <Card>
                      <img src={images1} alt="logo" height="100%" width="100%"/>
                        <Card.Body>
                          <Card.Title>Go Anywhere</Card.Title>
                          <Card.Text>
                          Our cars have all-India permits. Just remember to pay state tolls and entry taxes.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                      <img src={download3} alt="logo" height="100%" width="100%"/>
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
                <br></br>
                <br></br>
            </>
        )
    }
}

export default Offers;