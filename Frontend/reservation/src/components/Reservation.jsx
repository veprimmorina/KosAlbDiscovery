import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Rooms from "./Rooms";

export default class Reservation extends Component {
  state = {
    sidebarElements: [
      "Single",
      "Double",
      "Triple",
      "Quad",
      "Twin",
      "Double-Double",
      "Suite",
      "Mini Suite",
      "President Suite",
      "Apartament",
      "Villa",
    ],
  };

  render() {
    const username = localStorage.getItem("username");
    if (username == null) {
      return <Redirect to="/" />;
    } else {
      const sideBarElList = this.state.sidebarElements.map((sideelement, i) => (
        <li key={i}>
          <a href={"#" + sideelement}>{sideelement}</a>
        </li>
      ));
      console.log(this.props.match.params.username);
      return (
        <div className="pageMainDiv">
          <div className="appContainer">
            <div className="sideNav">
              <p className="sideNavTitle">What room are you looking for?</p>
              {sideBarElList}
            </div>

            <div className="roomsContainer">
              <Rooms businessUsername={this.props.match.params.username} />
            </div>
          </div>
        </div>
      );
    }
  }
}
