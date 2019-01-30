import React from 'react';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.stringIncludeKey = this.stringIncludeKey.bind(this);
    this.state = { search_term: '' };
  }
  
  updateField(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  stringIncludeKey(string, key) {
    if (key === '') return true;
    if (string[0].toLowerCase() === key[0].toLowerCase()) {
      return this.stringIncludeKey(string.slice(1), key.slice(1));
    }
    return false;
  } 
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchRestaurants(this.state).then(() => {
      this.props.history.push('/restaurant/search');
    });
  }

  searchBanner() {
    if (this.props.location.pathname !== "/") {
      return null;
    }

    return (
        <h2 className="header-banner">Find your table for any occasion</h2>
    );
  }

  render() {

    const matches = this.props.restaurants.filter((restaurant) => {
      return (this.state.search_term === '' || this.stringIncludeKey(restaurant.name, this.state.search_term));
    });
    const restNames = matches.map((restaurant, idx) => {
      return <li key={idx}>{restaurant.name}</li>
    })  

    return (
      <div className="picker-form">
        <div className="header-res">Reservation bar goes here</div>
        <div className="search-container">
          { this.searchBanner() }
          <form className="search-form" autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="autocomplete">
              <input id="rest-search"
                    type="text"
                    onChange={this.updateField("search_term")}
                    value={this.state.search_term}
                    placeholder="Location, Restaurant, or Cuisine"/>
              <ul className="search-dropdown">
                {restNames}
              </ul>
              <button type="submit" className="header-submit">Let's go</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RestaurantSearch;