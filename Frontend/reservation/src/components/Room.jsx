import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

class Room extends Component {
  state = {
    id: this.props.id,
    type: this.props.type,
    price: this.props.price,
    discount: this.props.discount,
    businessUsername: this.props.businessUsername,
    businessName: this.props.businessName,
    totalPrice:
      this.props.price - this.props.price * (this.props.discount / 100),
    roomFeatures: [],
    checkinDate: "",
    checkoutDate: "",
    maxcheckin: "",
  };

  componentDidMount() {
    fetch(
      "http://localhost:8080/api/register/roomFeature/get/all/" +
        this.state.type
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ roomFeatures: data });
      });
  }
  wrapperFunction = () => {};
  showPayButton(
    price,
    businessName,
    roomType,
    businessUsername,
    checkinDate,
    checkoutDate,
    roomtype,
    totalprice
  ) {
    if (checkinDate === "" || checkoutDate === "") {
      alert("Please fill Check In Date & Check Out Date.");
    } else {
      console.log(checkinDate);
      let date1 = new Date(checkinDate);
      let date2 = new Date(checkoutDate);
      console.log(date1);
      console.log(date1.getTime());
      console.log(date2.getTime());
      console.log(date2.getTime() - date1.getTime());
      let datesDiference =
        (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
      console.log(datesDiference);

      if (datesDiference == 0) {
        datesDiference = 1;
      }

      axios
        .post("http://localhost:7000/payment/get/data", {
          amount: totalprice * datesDiference,
          hotel: businessName,
          roomType: roomType,
        })
        .then(
          (response) => {
            console.log(response);
            if (response.data === true) {
              ///////////check for available room///////////////////////////////
              axios
                .post(
                  "http://localhost:9000/api/reservation/check/for/available/room",
                  {
                    checkInDate: checkinDate,
                    checkOutDate: checkoutDate,
                    businessUsername: businessUsername,
                    roomType: roomType,
                  }
                )
                .then(
                  (response) => {
                    console.log(response);
                    if (response.data == "") {
                      alert(
                        "There are no '" +
                          roomType +
                          "' rooms available for booking in your selected dates!\n Look for another room type or choose other dates."
                      );
                    } else {
                      window.open("http://localhost:7000/checkout");
                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              ////////////////////////////////////////////////////////////////////
            }
          },
          (error) => {
            console.log(error);
          }
        );

      console.log(this.state.checkinDate);
      console.log(this.state.checkoutDate);
      console.log(this.state.type);
      //current Date and Time (date/time when reservation is done)
      let myCurrentDate = new Date();
      let date = myCurrentDate.getDate();
      let month = myCurrentDate.getMonth() + 1;
      let year = myCurrentDate.getFullYear();

      let fullDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
        date < 10 ? `0${date}` : `${date}`
      }`;

      var currenttime =
        myCurrentDate.getHours() +
        ":" +
        myCurrentDate.getMinutes() +
        ":" +
        myCurrentDate.getSeconds();

      let user = localStorage.getItem("username");

      axios({
        method: "post",
        url: "http://localhost:7000/payment/get/reservation",
        data: {
          time: currenttime,
          date: fullDate,
          checkInDate: checkinDate,
          checkOutDate: checkoutDate,
          businessUsername: businessUsername,
          touristUsername: user,
          roomType: roomtype,
        },
      });
    }
  }

  chooseCheckinFirst(checkindate) {
    if (checkindate === "") {
      alert("Please choose Check In date first.");
    }
  }
  /* sendReservationData() {
    var date = new Date();
    axios({
      method: "post",
      url: "http://localhost:7000/payment/get/reservation",
      data: {
        time: "20:00:00",
        date: date.getDate(),
        checkInDate: date.getDate(),
        checkOutDate: date.getDate(),
        roomId: 50,
        businessId: 20,
        touristUsername: "abedintelaku",
      },
    });
  }*/
  /* getCheckInDate = (event) => {
    let val = event.target.value;
    this.setState({ checkinDate: val });
  };
  getCheckOutDate = (event) => {
    let val = event.target.value;
    this.setState({ checkoutDate: val });
  };*/

  render() {
    const roomF = this.state.roomFeatures.map((element, i) => (
      <p key={i}>
        {" "}
        <FaCheck className="checkIcon" /> {element.feature}
      </p>
    ));

    let myCurrentDate = new Date();
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();

    let fullDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
      date < 10 ? `0${date}` : `${date}`
    }`;

    const d = new Date(this.state.checkinDate);
    d.setDate(this.state.checkindate + 1);

    return (
      <div className="room" id={this.state.type}>
        <div className="roomPhotos">
          <img
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F10%2Fliving-room-hotel-president-wilson-geneva-EXPENSIVESUITE1017.jpg"
            alt="pht1"
          />
        </div>
        <div className="roomInfo">
          <h4>{this.state.type}</h4>
          <div className="roomSpecifications">{roomF}</div>
          <div className="roomPrice">
            <h2>
              {this.state.price -
                this.state.price * (this.state.discount / 100)}
              €
            </h2>
            <h6 className="firstPrice">
              {this.state.discount > 0 ? this.state.price + "€" : ""}
            </h6>
            <h6 className="discount">
              {this.state.discount > 0 ? this.state.discount + "% Off" : ""}
            </h6>
            <h6 className="room-night">1 Room/Night</h6>
          </div>
          <div className="chooseDate">
            <label htmlFor="checkInDate">Check In</label>
            <input
              type="date"
              id="checkInDate"
              onChange={(event) =>
                this.setState({ checkinDate: event.target.value })
              }
              min={fullDate}
              max={this.state.maxcheckin}
            />
            <label htmlFor="checkOutDate">Check Out</label>
            <input
              type="date"
              id="checkOutDate"
              onChange={(event) =>
                this.setState({
                  checkoutDate: event.target.value,
                  maxcheckin: event.target.value,
                })
              }
              onClick={() => this.chooseCheckinFirst(this.state.checkinDate)}
              min={this.state.checkinDate}
            />
          </div>
          <div className="submit">
            <input
              type="submit"
              value="Book Now"
              // onClick={this.showPayButton}
              onClick={() =>
                this.showPayButton(
                  this.state.price,
                  this.state.businessName,
                  this.state.type,
                  this.state.businessUsername,
                  this.state.checkinDate,
                  this.state.checkoutDate,
                  this.state.type,
                  this.state.totalPrice
                )
              }
            />

            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
