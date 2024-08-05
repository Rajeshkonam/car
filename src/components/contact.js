import React from 'react';
import './css/home.css';
import banner from './images/banner.PNG';
import photo8 from './images/photo8.jpg';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Nav,NavLink,NavMenu} from './NavbarElements';

class Contact extends React.Component {
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
                <br></br>
                <div>
                    <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="Vangapandlakotesh123@gmail.com" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Contact Number
                        </Form.Label>
                     
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="9618165458" />
                        <Form.Control plaintext readOnly defaultValue="8466965458" />
                        <Form.Control plaintext readOnly defaultValue="9678365458" />
                        <Form.Control plaintext readOnly defaultValue="9618167389" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit"><NavLink to="/">Submit</NavLink></Button>
                    </Form>
                    <footer>
                            <h4>Let's Keep in Touch</h4>
                            <p>
                                7th Floor, Tower-B, Diamond District, 150, HAL Airport Road, Kodihalli, Bangalore – 560008
                            </p>
                            <div className="copy-rights">
                                © Copyright 2024 HomeXRental India Private Ltd. All rights reserved.
                            </div>
                    </footer>
                </div>
            </>
        )
    }
}

export default Contact;