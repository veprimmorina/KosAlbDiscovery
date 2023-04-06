import React, { Component } from "react";

class RoomType extends Component {
  state = {
    id: this.props.id,
    number: "",
    businessUsername: this.props.businessUsername,
  };

  componentDidMount() {
    fetch(
      "http://localhost:8008/api/reservation/get/roomreservations/number/" +
        this.state.id +
        "/" +
        this.state.businessUsername
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ number: data });
      });
  }

  render() {
    return (
      <div className="roomTypeDiv">
        <p>{this.state.id}</p>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default RoomType;
