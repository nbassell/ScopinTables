import React from "react";
import RestaurantSearch from '../restaurant_search/restaurant_search_container';
import TopCuisines from './top_cuisines_container';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="splash-container">
        <div className="header-box">
          <RestaurantSearch />
        </div>
        <div className="top-cuisines-section">
          <h1 className="top-cuisines-header">
            Top Cuisines near you
          </h1>
          <TopCuisines />
        </div>
      </section>
    );
  }
};

export default Splash;