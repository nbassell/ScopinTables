import React from "react";
import ReservationForm from '../reservation/reservation_form_container';
import { priceConvert } from '../restaurant_index/restaurant_index_helper';
import ReviewIndex from '../review_index/review_index_container';
import FavoriteButton from '../favorite/favorite_button_container';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
    if (this.props.currentUser) {
      this.props.fetchFavorites(this.props.currentUser);
    }
    window.scrollTo(0, 0);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      nextProps.fetchRestaurant();
      window.scrollTo(0, 0);
    }
  }

  showReadMoreBtn() {
    if (this.props.restaurant.description === undefined ||
      this.props.restaurant.description.length < 200) {
      return false;
    }

    return true;
  }

  mainContent() {
    const { restaurant } = this.props;
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    return (
      <div className="show-page-main">
        <div className="show-overview">

          <h1 className="show-title">{restaurant.name}</h1>
          <div className="show-details">
            <ul className="rest-info">
              <li>{restaurant.cuisine}</li>
              <li>Price: {priceConvert(restaurant.price)}</li>
              <li>Address: {restaurant.address}</li>
              <li>Phone #: {restaurant.phone_number}</li>
              <li>Opens at: {restaurant.opening_time}</li>
              <li>Closes at: {restaurant.closing_time}</li>
            </ul>
          </div>
          <p className={`show-blurb ${toggledClass}`}>{restaurant.description}</p>
          {
            this.showReadMoreBtn() &&
            <button className="read-more" onClick={() => this.setState({ expanded: !expanded })}>
              {expanded ? '- Read Less' : '+ Read More'}
            </button>
          }
        </div>
        <ReviewIndex />
      </div>
    );
  }

  render() {
    const { restaurant, errors } = this.props;
    if (!restaurant) {
       return null};
    return (
      <div className="show-page-master">
        <div className="show-page-bg-image" alt="scopin-tables-restaurant-bg">
        </div>
        <div className="show-page-and-form">
          {this.mainContent()}
          <div className="show-page-reservation-favorite">
            <ReservationForm />
            <FavoriteButton restaurant={ restaurant }/>
          </div>
        </div>
      </div>
    );

  }
}

export default RestaurantShow;