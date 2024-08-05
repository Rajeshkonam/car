import React from 'react';
import './css/home.css';
import banner from './images/banner.PNG';
import { connect } from 'react-redux';
import {Nav,NavLink,NavMenu} from './NavbarElements';
import Flow from '../plugins/flow';
import '../assets/styles/booking.css';
import '../assets/styles/Header.css';
import CreateRequest from '../plugins/createRequest';
import ChooseCar from '../plugins/chooseCar';
import Extras from '../plugins/extras';
import Book from '../plugins/carBooking';

class Dashboard extends React.Component {
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
                        <NavLink to='/subscription' activeStyle>Subscription</NavLink>
                        <NavLink to='/about' activeStyle>About</NavLink>
                        <NavLink to='/services' activeStyle>Services</NavLink>
                        
                        <NavLink to='' activeStyle>Contact Number :-7396720251
                        </NavLink>
                    </NavMenu>
                </Nav>
                </div>
                <div className="bookingFlow">
                <ul>
                    <Flow 
                        flowNumber={1} 
                        isCompleted={this.props.progress > 1 ? true : false} 
                        title={'Create Request'} 
                        isActive={this.props.progress ===1 ? true : false} 
                    />
                    <Flow 
                        flowNumber={2} 
                        isCompleted={this.props.progress > 2 ? true : false} 
                        title={'Choose a Car'} 
                        isActive={this.props.progress ===2 ? true : false}
                    />
                    <Flow 
                        flowNumber={3} 
                        isCompleted={this.props.progress > 3 ? true : false} 
                        title={'Choose Extras'} 
                        isActive={this.props.progress ===3 ? true : false} 
                    />
                    <Flow 
                        flowNumber={4} 
                        isCompleted={this.props.progress > 4 ? true : false} 
                        title={'Review & Book'} 
                        isActive={this.props.progress ===4 ? true : false} 
                    />
                </ul>
            </div>
            <div>
                {
                    this.props.progress ===1
                    &&
                    <CreateRequest />
                }
                {
                    this.props.progress ===2
                    &&
                    <ChooseCar />
                }
                {
                    this.props.progress ===3
                    &&
                    <Extras />
                }
                {
                    this.props.progress ===4
                    &&
                    <Book />
                }
            </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
  ...state
})
export default connect(mapStateToProps)(Dashboard);