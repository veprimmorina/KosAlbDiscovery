import React, { Component } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import ReservationsTable from "./ReservationsTable";
import RoomType from "./RoomType";
import Select from "react-select";
import axios from "axios";
import Navbar from "./Navbar";
import { Redirect } from "react-router";

class UserProfile extends Component {
  state = {
    business: "",
    city: "",
    roomTypes: [],
    reservations: [],
    reservationId: "",
    reservationsProfits: "",
    bUsername: this.props.match.params.username,
    selectedOption: "",
    selectedFromAllTypes: "",
    selectedFromEdit: "",
    newRoomNumber: 0,
    newRoomAndTypeNumber: 0,
    newRoomAndTypePrice: 0,
    editRoomPrice: 0,
    editRoomDiscount: 0,
  };
  componentDidMount() {
    fetch(
      "http://localhost:9000/api/register/business/get/business/byUsername/" +
        this.props.match.params.username
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ business: data, city: data.city });
        console.log();
      });

    fetch(
      "http://localhost:9000/api/reservation/get/reservations/" +
        this.props.match.params.username
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ reservations: data, reservationId: data.id });
      });

    fetch(
      "http://localhost:9000/api/register/room/get/roomtypes/" +
        this.props.match.params.username
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ roomTypes: data });
      });
  }

  printReservationsStats(username) {
    window.open(
      "http://localhost:9000/api/reservation/export/reservations/PDF/" +
        username
    );
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected From New Room:`, selectedOption);
  };
  handleChangeAllTypes = (selectedFromAllTypes) => {
    this.setState({ selectedFromAllTypes });
    console.log(`Option selected From All Types:`, selectedFromAllTypes);
  };
  handleChangeEdit = (selectedFromEdit) => {
    this.setState({ selectedFromEdit });
    console.log(`Option selected From Edit:`, selectedFromEdit);
  };

  addNewRoom(roomtype, roomnumber, username) {
    console.log(roomnumber);
    console.log(roomtype);
    console.log(username);
    if (roomtype == "" || roomnumber == "") {
      alert("Please fill all required data.");
    } else {
      axios({
        method: "post",
        url: "http://localhost:9000/api/register/room/create/new/room",
        data: {
          roomType: roomtype,
          roomNumber: roomnumber,
          username: username,
        },
      });
    }
  }
  addNewRoomAndType(roomtype, roomnumber, roomprice, username) {
    console.log(roomtype);
    console.log(roomnumber);
    console.log(roomprice);
    console.log(username);
    if (
      roomtype == "" ||
      roomnumber == "" ||
      roomprice == "" ||
      username == ""
    ) {
      alert("Please fill all required fields.");
    } else {
      axios({
        method: "post",
        url: "http://localhost:9000/api/register/room/create/room/and/type",
        data: {
          roomType: roomtype,
          roomNumber: roomnumber,
          username: username,
          roomPrice: roomprice,
        },
      });
    }
  }
  editRoom(roomtype, roomprice, roomdiscount, username) {
    console.log(roomtype);
    console.log(roomdiscount);
    console.log(roomprice);
    console.log(username);
    if (
      roomtype == "" ||
      roomdiscount == "" ||
      roomprice == "" ||
      username == ""
    ) {
      alert("Please fill all required fields.");
    } else {
      axios({
        method: "post",
        url: "http://localhost:9000/api/register/room/edit/room",
        data: {
          roomType: roomtype,
          roomDiscount: roomdiscount,
          username: username,
          roomPrice: roomprice,
        },
      });
    }
  }
  render() {
    //  <div className="roomTypeDiv">
    // <p key={i} id={roomType}>
    //  {roomType}
    // </p>
    //</div>
    const username = localStorage.getItem("username");
    if (username != this.state.bUsername) {
      return <Redirect to="/" />;
    } else if (username == this.state.bUsername) {
      console.log(this.props.match.params.username);
      console.log(this.state.roomTypes);

      const roomTypesList = this.state.roomTypes.map((roomType, i) => (
        <RoomType
          key={i}
          id={roomType}
          businessUsername={this.props.match.params.username}
        />
      ));
      let totalProfits = 0;
      const profit = this.state.reservations.map((reservation) => {
        return (totalProfits = totalProfits + reservation.totalPrice);
      });

      const selectedOption = this.state.selectedOption;
      const selectedFromAllTypes = this.state.selectedFromAllTypes;
      const selectedFromEdit = this.state.selectedFromEdit;
      const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ];
      const allTypesOfRooms = [
        { value: "Single", label: "Single" },
        { value: "Double", label: "Double" },
        { value: "Triple", label: "Triple" },
        { value: "Quad", label: "Quad" },
        { value: "Twin", label: "Twin" },
        { value: "Double-Double", label: "Double-Double" },
        { value: "Suite", label: "Suite" },
        { value: "Mini Suite", label: "Mini Suite" },
        { value: "President Suite", label: "President Suite" },
        { value: "Apartament", label: "Apartament" },
        { value: "Villa", label: "Villa" },
      ];

      const selectRoomTypes = this.state.roomTypes.map((roomType) => ({
        value: roomType,
        label: roomType,
      }));

      console.log(options);
      console.log(selectRoomTypes);
      return (
        <div className="allContent">
          <Navbar username={this.state.bUsername} />
          <div className="userProfileContent">
            <div className="userProfileSideNav">
              <ul>
                <li>
                  <a href="#reservationsTableDiv">Reservations</a>
                </li>
                <li>
                  <a href="#reports">Stats & Profits</a>
                </li>
                <li>
                  <a href="#addRoom">Rooms</a>
                </li>
              </ul>
            </div>

            <div className="userProfileMainContent">
              <div className="userProfileData">
                <div className="userProfilePicture">
                  <img
                    className="profilePicture"
                    src="https://www.casy.ch/wp-content/uploads/2021/01/hotel-agencies-2.jpg"
                    alt=""
                  />
                </div>
                <div className="userProfileInfo">
                  <h2 style={{ color: "orange", "margin-bottom": "10%" }}>
                    {this.state.business.name}
                  </h2>
                  <h6 style={{ "margin-bottom": "5%" }}>
                    <FaPhoneAlt style={{ color: "orange" }} />
                    {this.state.business.tel_Number}
                  </h6>
                  <h6 style={{ "margin-bottom": "5%" }}>
                    <FaAt style={{ color: "orange" }} />{" "}
                    {this.state.business.email}
                  </h6>
                  <h6>
                    <FaMapMarkerAlt style={{ color: "orange" }} />{" "}
                    {this.state.city.name}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="tableDiv" id="reservationsTableDiv">
            <ReservationsTable username={this.props.match.params.username} />
          </div>
          <div className="businessReports" id="reports">
            <div className="chart">
              <h4>Rooms that have been booked.</h4>
              <div className="pieChart">{roomTypesList}</div>
            </div>

            <div className="reservationsProfits">
              <h4>Reservations Profits.</h4>
              <div className="profitsData">
                <div className="reservationsNumber">
                  <h1>{this.state.reservations.length}</h1>
                  <h5>Reservations</h5>
                </div>
                <div className="profitsAmount">
                  <h1>{totalProfits}€</h1>
                </div>
              </div>
              <div className="printProfits">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    this.printReservationsStats(
                      this.props.match.params.username
                    )
                  }
                >
                  Print Reservations Stats
                </button>
              </div>
            </div>
          </div>

          <div className="rooms" id="addRoom">
            <div className="newRoomDiv">
              <h4>New Room</h4>
              <label htmlFor="">Room Number</label>
              <input
                id="roomNumberInput"
                type="number"
                min="1"
                onChange={(event) =>
                  this.setState({ newRoomNumber: event.target.value })
                }
              />

              <label htmlFor="roomTypesSelect">Select Room Type</label>
              <Select
                name=""
                id="roomTypesSelect"
                className="roomTypesSelect"
                value={selectedOption}
                onChange={this.handleChange}
                options={selectRoomTypes}
              />

              <div className="newRoomButtons">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    this.addNewRoom(
                      selectedOption.value,
                      this.state.newRoomNumber,
                      this.state.bUsername
                    )
                  }
                >
                  Add
                </button>
              </div>
            </div>

            <div className="newRoomAndType">
              <h4 className="newRoomAndTypeContent">New Room & Type</h4>

              <label htmlFor="" className="newRoomAndTypeContent">
                Room Type
              </label>
              <Select
                name=""
                id="roomTypesSelect"
                className="newRoomAndTypeContent"
                value={selectedFromAllTypes}
                onChange={this.handleChangeAllTypes}
                options={allTypesOfRooms}
              />

              <label htmlFor="" className="newRoomAndTypeContent">
                Room Number
              </label>
              <input
                id="roomNumberInput"
                type="number"
                className="newRoomAndTypeContent"
                min="1"
                onChange={(event) =>
                  this.setState({ newRoomAndTypeNumber: event.target.value })
                }
              />

              <label htmlFor="" className="newRoomAndTypeContent">
                Room Price
              </label>
              <input
                id="roomNumberInput"
                type="number"
                className="newRoomAndTypeContent"
                min="1"
                onChange={(event) =>
                  this.setState({ newRoomAndTypePrice: event.target.value })
                }
              />

              <div className="newRoomAndTypeButtons">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.addNewRoomAndType(
                      selectedFromAllTypes.value,
                      this.state.newRoomAndTypeNumber,
                      this.state.newRoomAndTypePrice,
                      this.state.bUsername
                    );
                  }}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="editRoom">
              <h4 className="editRoomContent">Edit Room</h4>

              <label htmlFor="roomTypesEdit" className="editRoomContent">
                Room Type
              </label>
              <Select
                name=""
                id="roomTypesEdit"
                className="roomTypesSelect editRoomContent"
                value={selectedFromEdit}
                onChange={this.handleChangeEdit}
                options={selectRoomTypes}
              />

              <label htmlFor="roomNumberEdit" className="editRoomContent">
                Room Price
              </label>
              <input
                type="number"
                min="1"
                className="editRoomContent"
                onChange={(event) =>
                  this.setState({ editRoomPrice: event.target.value })
                }
              />

              <label htmlFor="roomNumberEdit" className="editRoomContent">
                Room Discount
              </label>
              <input
                type="number"
                min="0"
                className="editRoomContent"
                onChange={(event) =>
                  this.setState({ editRoomDiscount: event.target.value })
                }
              />

              <div className="editRoomButtons">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.editRoom(
                      selectedFromEdit.value,
                      this.state.editRoomPrice,
                      this.state.editRoomDiscount,
                      this.state.bUsername
                    );
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserProfile;
