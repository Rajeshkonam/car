import React from 'react';
import './css/home.css';
import "./css/adminLogin.css";
import banner from './images/banner.PNG';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faKey, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

class Register extends React.Component {
  constructor(props) {
    super();
    this.onChangeUser =this.onChangeUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCPassword = this.onChangeCPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      User:"",
      Email: "",
      Password: "",
      CPassword:"",
      msg: "",
    };
  }

  onChangeUser(e){
    this.setState({ User: e.target.value});
  }

  onChangeEmail(e) {
    this.setState({ Email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ Password: e.target.value });
  }

  onChangeCPassword(e) {
    this.setState({ CPassword: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Login Successfull");
    console.log(`USER NAME: ${this.state.User}`);
    console.log(`EMAIL ID : ${this.state.Email}`);
    console.log(`PASSWORD : ${this.state.Password}`);
    console.log(`CPASSWORD : ${this.state.CPassword}`);
    if (
      this.state.Email === "admin@gmail.com" &&
      this.state.Password === "admin1234"
    ) {
      this.setState({ msg: "WELCOME ADMIN" });
      sessionStorage.setItem("Key_Veriable", "admin@gmail.com");
      this.props.history.push("/adminafterlogin");
    } else {
      this.setState({ msg: "INVALID" });
    }
    this.setState({ Email: "", Password: "" });
  }
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
                        
                        <NavLink to='/about' activeStyle>About</NavLink>
                        
                    </NavMenu>
                </Nav>
                </div>
                <div className="container">
            <div className="signin-container">
                <h1 style={{color:'green'}}>Register Here</h1>
                <h4 className="msg">{this.state.msg}</h4>
                <form onSubmit={this.onSubmit}>
                <div className="box">
                <FontAwesomeIcon icon={faUser} />
                <input
                type="text"
                name="User"
                id="User"
                placeholder="User Name"
                value={this.state.User}
                onChange={this.onChangeUser}
                />
                </div>
                <div className="box">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
                value={this.state.Email}
                onChange={this.onChangeEmail}
                />
                </div>
                <div className="box">
                <FontAwesomeIcon icon={faKey} />
                <input
                type="Password"
                name="Password"
                id="Password"
                placeholder="Password"
                value={this.state.Password}
                onChange={this.onChangePassword}
                />
                </div>
                <div className="box">
                <FontAwesomeIcon icon={faKey} />
                <input
                type="password"
                name="CPassword"
                id="CPassword"
                placeholder="Confirm Password"
                value={this.state.CPassword}
                onChange={this.onChangeCPassword}
                />
                </div>
                <button className="btn-signin" style={{color:'green'}}><NavLink to="/login">Create Account</NavLink></button>
                </form>
            </div>
            </div>
            </>
        )
    }
}

export default Register;