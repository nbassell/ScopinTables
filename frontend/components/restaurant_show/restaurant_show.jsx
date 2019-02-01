import React from "react";
import ReservationForm from '../reservation/reservation_form_container';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurant();
    window.scrollTo(0, 0);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      nextProps.fetchRestaurant();
      window.scrollTo(0, 0);
    }
  }

  mainContent() {
    const { restaurant } = this.props;
    return (
      <div className="show-page-main">
        <div className="show-overview">

          <h1 className="show-title">{restaurant.name}</h1>
          <div className="show-details">
            <ul className="rest-info">
              <li>Address: {restaurant.address}</li>
              <li>Phone #: {restaurant.phone_number}</li>
              <li>Opens at {restaurant.opening_time}</li>
              <li>Closes at {restaurant.closing_time}</li>
            </ul>
          </div>
          <p className="show-blurb">{restaurant.description}</p>
        </div>
      </div>
    );
  }

  render() {
    const { restaurant } = this.props;
    if (!restaurant) {
       return null};
    return (
      <div className="show-page-master">
        <div className="show-page-bg-image" alt="scopin-tables-restaurant-bg">
        </div>
        <div className="show-page-and-form">
          {this.mainContent()}
          <div className="show-page-reservation">
            <ReservationForm />
          </div>
        </div>
      </div>
    );

  }
}

export default RestaurantShow;