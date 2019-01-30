import React from 'react';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.stringIncludeKey = this.stringIncludeKey.bind(this);
    this.state = {
      search_term: '',

    };
  }
  
  componentDidMount() {
    this.props.preSearch();
  }
  
  //In order to get the restaurants in state so they appear in the autocomplete,
  //will need to write another function that uses Restaurant.search to query
  //the database and pull the restaurants asynchronously (after say, 1s).
  //We can then use onChange to call both updateField and this new function.
  updateField(field) {
    this.setState({
      search_term: field.target.value
    });
  }

  stringIncludeKey(string, key) {
    if (key === '') return true;
    if (string[0].toLowerCase() === key[0].toLowerCase()) {
      return this.stringIncludeKey(string.slice(1), key.slice(1));
    }
    else if (string.length > 1) {
      return this.stringIncludeKey(string.slice(1), key);
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
        <h2>Find your table for any occasion</h2>
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
        <div className="header-banner">
          { this.searchBanner() }
        </div>
        <div className="search-container">
          <div className="header-res">Reservation bar goes here
            <div className="res-date"></div>
            <div className="res-time"></div>
            <div className="res-people"></div>
          </div>
          <form className="search-form" autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="autocomplete">
              <div className="autocomplete-form">
                <input id="rest-search"
                      type="text"
                      onChange={this.updateField}
                      value={this.state.search_term}
                      placeholder="Location, Restaurant, or Cuisine"/>
                <ul className="search-dropdown">
                  {restNames}
                </ul>
              </div>
                <button type="submit" className="header-submit">Let's go</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RestaurantSearch;