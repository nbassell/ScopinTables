import React from "react";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table_size: 2,
      time: this.props.restaurant.opening_time,
      date: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearReservationErrors();
    this.props.clearReservationConfirmation();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser, openLogin, restaurant } = this.props;
    const { time, date, table_size } = this.state;

    if (!currentUser) {
      openLogin();
    } else {
      const reservation = {
        restaurant_id: restaurant.id,
        table_size,
        start_datetime: date + " " + time,
      };

      this.props.createReservation(reservation);
    }
  }

  updateField(field) {
    return (e) => {
      this.props.clearReservationConfirmation();
      this.setState({[field]: e.target.value});
    };
  }

  errorMessages() {
    const errors = this.props.errors;
    if (errors.length === 0) {
      return null;
    } else {
      const errorLis = errors.map((error, idx) => {
        const truncError = error.split(' ').slice(1).join(' ');
        return (
          <li className="reservation-message-text" key={idx}>{truncError}</li>
        )
      })
      return (
        <ul className="reservation-message-container">
          {errorLis}
        </ul>
      )
    }
  }

  displayConfirmation() {
    if (!this.props.confirmation) return null;
    return (
      <div className="reservation-message-container">
        <p className="reservation-message-text">Reservation complete!</p>
      </div>
    )
  }

  timeOptions() {
    const { opening_time, closing_time } = this.props.restaurant;
    const openingHour = new Date("01/01/2000 " + opening_time).getHours();
    let closingHour = new Date("01/01/2000 " + closing_time).getHours();
    if (closingHour === 0) closingHour = 24;
    
    let times = [];
    for (let i = openingHour; i < closingHour; i++) {
      let hourString = i > 12 ? (i - 12).toString() : i.toString();
      
      for (let j = 0; j <= 45; j += 30) {
        // if (i === 24) 
        if (i === closingHour - 1) break;
        let timeString = hourString + ":";
        timeString += j === 0 ? "00" : j.toString();
        timeString += i >= 12 ? " PM" : " AM";
        times.push(timeString);
        
        
      }
    }
    return times.map(time => {
      return (
        <option key={time} value={time}>{time}</option>
      )
    })
  }

  tableSizeOptions() {
    let tables = [];

    for (let i = 1; i <= 20; i++) {
      tables.push(
        <option key={i} value={i}>
          {"For " + i }
        </option>
      )
    }

    return tables;
  }


  render() {
    let today = new Date();
    let minDate = today.toISOString().slice(0, 10);

    return (
      <div className="reservation-container">
        <h1 className="reservation-header">Make a reservation</h1>
        {this.errorMessages()}
        {this.displayConfirmation()}

        <form className="reservation-form" onSubmit={this.handleSubmit}>
          <label>
            Party Size
            <select className="reservation-input whole party"
                    value={this.state.table_size}
                    onChange={this.updateField("table_size")}>
                    { this.tableSizeOptions() }
            </select>
          </label>

          <div className="label-container">
            <label>Date</label>
            <label>Time</label>
          </div>

          <div className="half-container">
            <input type="date" min={minDate} value={this.state.date}
                   onChange={this.updateField("date")}
                   className="reservation-input half date">
            </input>

            <select className="reservation-input half time"
                    value={this.state.time}
                    onChange={this.updateField("time")}>
                    {this.timeOptions()}
            </select>
          </div>

            <input type="submit" value="Find a Table"
                   className="reservation-submit whole"/>
        </form>
      </div>
    )
  }

}

export default ReservationForm;