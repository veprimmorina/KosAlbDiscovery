import React, { Component } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

class Business extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    businessusername: this.props.businessusername,
    address: this.props.address,
    username: this.props.username,
  };

  render() {
    return (
      <div className="business">
        <Link
          to={"/rooms/" + this.state.businessusername}
          className="businessLink"
        >
          <div className="businessContent">
            <div className="businessImgDiv">
              <img
                className="hotelPht"
                src="https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
                alt="hotelPht"
              />
            </div>
            <div className="businessInfo">
              <p className="hotelName">{this.state.name}</p>

              <div className="businessAddress">
                <FaMapMarkerAlt className="mapMarkericon" />
                <p className="hotelAddress">{this.state.address}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Business;
