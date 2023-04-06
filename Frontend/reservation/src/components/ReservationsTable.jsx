import React, { Component } from "react";

class ReservationsTable extends Component {
  state = {
    reservations: [],
    id: "",
    checkindate: "",
    checkoutdate: "",
    roomtype: "",
    roomnumber: "",
    roomprice: "",
    discount: "",
    totalprice: "",
    touristname: "",
    touristusername: "",
    touristemail: "",
  };

  componentDidMount() {
    fetch(
      "http://localhost:9000/api/reservation/get/reservations/" +
        this.props.username
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          reservations: data,
          id: data.id,
        });
        console.log(data);
      });
  }

  printReservationInvoice(reservationId) {
    window.open(
      "http://localhost:9000/api/reservation/export/PDF/" + reservationId
    );
  }

  render() {
    console.log(this.state.reservations);
    let checkindate;
    let checkoutdate;
    const reservationsList = this.state.reservations.map(
      (reservation) => (
        (checkindate = new Date(reservation.checkInDate).toLocaleDateString(
          "en-US"
        )),
        (checkoutdate = new Date(reservation.checkOutDate).toLocaleDateString(
          "en-US"
        )),
        (
          <tbody>
            <tr>
              <td style={{ "border-left": "1px solid lightgray" }}>
                {reservation.id}
              </td>
              <td>{checkindate}</td>
              <td>{checkoutdate}</td>
              <td>{reservation.room.roomType}</td>
              <td>{reservation.room.roomNumber}</td>
              <td>{reservation.room.roomPrice}€</td>
              <td>{reservation.room.roomDiscount}%</td>
              <td>{reservation.totalPrice}€</td>
              <td>{reservation.tourist.touristName}</td>
              <td>{reservation.tourist.touristUsername}</td>
              <td>{reservation.tourist.touristEmail}</td>
              <td>
                <button
                  key={reservation.id}
                  className="btn btn-primary"
                  onClick={() => this.printReservationInvoice(reservation.id)}
                >
                  Print
                </button>
              </td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        )
        //</table>
      )
    );
    return (
      <div>
        <h5>Reservations</h5>
        <table className="table table-striped reservationsTable">
          <thead>
            <tr>
              <th style={{ "border-left": "1px solid lightgray" }}>ID</th>
              <th>Checkin Date</th>
              <th>Checkout Date</th>
              <th>Room Type</th>
              <th>Room Number</th>
              <th>Room Price</th>
              <th>Discount</th>
              <th>Total Price</th>
              <th>Tourist Name</th>
              <th>Tourist Username</th>
              <th>Tourist Email</th>
              <th>Print</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {reservationsList}
        </table>
      </div>
    );
  }
}

export default ReservationsTable;
