import React from "react";

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      nextProps.fetchRestaurant();
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
              <li>Phone: {restaurant.phone_number}</li>
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
    if (!restaurant || !restaurant.fetched) return null;

    return (
      <div className="show-page-master">
        <div className="show-page-bg">
          <img src={window.images.showBackground}
               className="show-page-bg-image" alt="table-42-bg" />
        </div>
        <div className="show-page-and-form">
          {this.mainContent()}
        </div>
      </div>
    );

  }
}

export default RestaurantShow;