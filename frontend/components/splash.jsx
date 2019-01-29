import React from "react";
import RestaurantSearch from './restaurant_search/restaurant_search_container';


export default () => {
  return (
    <section className="splash-container">
      <div className="header-box">
        <p>Find your table for any occasion</p>

        <div className="header-form">z
          <div className="header-res">Reservation bar goes here</div>
          <div className="header-search">
            <RestaurantSearch />
          </div>
          <input type="submit" value="Let's go" className="header-submit" />
        </div>
      </div>
    </section>
  );
};