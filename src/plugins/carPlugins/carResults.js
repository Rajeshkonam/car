import React, { Component } from "react";
import Car from "./car";
import { sortBy } from "lodash";
import setProgresss from "../../actions/setProgress";
import setCar from "../../actions/setCar";
import { connect } from "react-redux";

class CarResults extends Component {
  state = {
    currentPage: 1,
    carsPerPage: 4,
  };

  pageNext = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { data, sortKey, onSort } = this.props;
    const sortedList = sortBy(data, sortKey);
    const { currentPage, carsPerPage } = this.state;
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = sortedList.slice(indexOfFirstCar, indexOfLastCar);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedList.length / carsPerPage); i++) {
      pageNumbers.push(i);
    }

    const bikes = [
      {
        image: "https://i.ibb.co/nPxtKZp/download.jpg",
        carName: "Meteor350",
        vehicleType: "Cruiser",
        noPassengers: "2",
        description: "Comfortable Cruiser",
        transmission: "5",
        fuel: "30/l",
        price: "100",
      },
      {
        image: "https://i.ibb.co/nPxtKZp/download.jpg",
        carName: "Meteor350",
        vehicleType: "Cruiser",
        noPassengers: "2",
        description: "Comfortable Cruiser",
        transmission: "5",
        fuel: "30/l",
        price: "100",
      },
      {
        image: "https://i.ibb.co/nPxtKZp/download.jpg",
        carName: "Meteor350",
        vehicleType: "Cruiser",
        noPassengers: "2",
        description: "Comfortable Cruiser",
        transmission: "5",
        fuel: "30/l",
        price: "100",
      },
    ];
    return (
      <div className="result-main">
        <div className="info">
          <div className="info-header header">
            <i className="fas fa-info-circle"></i>
            Results
            <div className="sort">
              <p>SORT BY</p>
              <div>
                <button onClick={() => onSort("price")}>Price</button>|
                <button onClick={() => onSort("vehicleType")} id="type">
                  Type
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="results">
          {currentCars.map((car, index) => (
            <Car
              key={index}
              carName={car.carName}
              vehicleType={car.vehicleType}
              topSeller={car.topSeller}
              noPassengers={car.noPassengers}
              description={car.description}
              transmission={car.transmission}
              airConditioning={car.airConditioning}
              fuel={car.fuel}
              price={car.price}
            />
          ))}
          {bikes.map((res) => (
            <>
              <div>
                <div className="car-details">
                  <img src={res.image} alt="car" />
                  <div className="details">
                    <div>
                      <p className="car-name">{res.carName}</p>
                      <p className="divider">|</p>
                      <p className="carvehicle-type">{res.vehicleType}</p>
                      <p className="divider">|</p>
                      {res.topSeller && (
                        <p className="top-seller">Top Seller</p>
                      )}
                    </div>
                    <ul>
                      <li>
                        <i></i>
                        {res.noPassengers}
                      </li>
                      <li>
                        <i></i>
                        {res.description}
                      </li>
                      <li>
                        <i></i>
                        {res.transmission}
                      </li>
                      <li>
                        <i></i>
                        {res.fuel}
                      </li>
                    </ul>
                  </div>
                  <button>[+] View Bike Details</button>
                </div>
                <div className="price">
                  <p>
                    <strong>{`$${res.price}`}</strong>
                  </p>
                  <p>Unlimited Free miles included</p>
                  <button
                    onClick={() => {
                      this.props.setProgress(3);
                      this.props.setCar(res.carName);
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <ul className="page-numbers">
          {pageNumbers.map((number) => (
            <li
              className={currentPage === number && "currentPage"}
              key={number}
              id={number}
              onClick={this.pageNext}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setProgress: (payload) => dispatch(setProgresss(payload)),
  setCar: (payload) => dispatch(setCar(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CarResults);
