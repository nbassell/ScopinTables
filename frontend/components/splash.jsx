import React from "react";
import RestaurantSearch from './restaurant_search/restaurant_search_container';


export default () => {
  return (
    <section className="splash-container">
      <div className="header-box">
        <RestaurantSearch />
      </div>
      {/* <FeaturedAreas /> */}
    </section>
  );
};