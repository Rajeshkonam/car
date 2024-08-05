import React from 'react';
import './css/home.css';
import "./css/adminLogin.css";
import banner from './images/banner.PNG';
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Nav,NavLink,NavMenu} from './NavbarElements';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Login extends React.Component {
  constructor(props) {
    super();
    this.onChangeAdminEmail = this.onChangeAdminEmail.bind(this);
    this.onChangeAdminPassword = this.onChangeAdminPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      adminEmail: "",
      adminPassword: "",
      msg: "",
    };
  }

  onChangeAdminEmail(e) {
    this.setState({ adminEmail: e.target.value });
  }
  onChangeAdminPassword(e) {
    this.setState({ adminPassword: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("Login Successfull");
    console.log(`ADMIN EMAIL ID : ${this.state.adminEmail}`);
    console.log(`ADMIN PASSWORD : ${this.state.adminPassword}`);
    if (
      this.state.adminEmail === "admin@gmail.com" &&
      this.state.adminPassword === "admin1234"
    ) {
      this.setState({ msg: "WELCOME ADMIN" });
      sessionStorage.setItem("Key_Veriable", "admin@gmail.com");
      this.props.history.push("/adminafterlogin");
    } else {
      this.setState({ msg: "INVALID" });
    }
    this.setState({ adminEmail: "", adminPassword: "" });
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
                        
                    </NavMenu>
                </Nav>
                </div>
                <div className="container">
            <div className="signin-container">
                <h1 style={{color:'green'}}>Login Here</h1>
                <h4 className="msg">{this.state.msg}</h4>
                <form onSubmit={this.onSubmit}>
                <div className="box">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                type="text"
                name="adminEmail"
                id="Email"
                placeholder="Email"
                value={this.state.adminEmail}
                onChange={this.onChangeAdminEmail}
                />
                </div>
                <div className="box">
                <FontAwesomeIcon icon={faKey} />
                <input
                type="password"
                name="adminPassword"
                id="Password"
                placeholder="Password"
                value={this.state.adminPassword}
                onChange={this.onChangeAdminPassword}
                />
                </div>
                <button className="btn-signin" style={{color:'green'}}><NavLink to="/dashboard">Log in</NavLink></button>
                </form>
            </div>
            </div>
            </>
        )
    }
}

export default Login;