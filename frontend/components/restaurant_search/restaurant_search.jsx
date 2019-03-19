import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { CUISINE_OPTIONS as cuisines } from '../restaurant_index/restaurant_index_helper';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateField = this.updateField.bind(this);
    this.stringIncludeKey = this.stringIncludeKey.bind(this);
    this.state = {
      search_term: '',
      isShowing: false,
    };
  }
  
  componentDidMount() {
    this.props.preSearch();
  }
  
  dropdownHandler() {
    // e.preventDefault();
    
    if (this.state.search_term.length > 0 ) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  //In order to get the restaurants in state so they appear in the autocomplete,
  //will need to write another function that uses Restaurant.search to query
  //the database and pull the restaurants asynchronously (after say, 1s).
  //We can then use onChange to call both updateField and this new function.
  updateField(e) {
    
    this.setState({
      search_term: e.target.value
    });
      
    if (e.target.value.length > 0) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  stringIncludeKey(string, key) {
    if (key === '') return true;
    if (string === "") return false;
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
      this.props.history.push('/restaurants/search');
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.cuisineSearch(e.currentTarget.id)
      .then(() => this.props.history.push('/restaurants/search'));
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

    const showing = this.state.isShowing ? "show" : "";

    // const strings = 

    const nameMatches = this.props.restaurants.filter((restaurant) => {
      return (this.state.search_term === '' || this.stringIncludeKey(restaurant.name, this.state.search_term));
    });

    const cuisineNames = cuisines.map((cuisine) => {
      if (this.state.search_term === '' || this.stringIncludeKey(cuisine, this.state.search_term)) {
        return (<li
          onClick={ this.handleClick }
          key={ cuisine }
          id={ cuisine }>
          { cuisine }
        </li>)
      }
    });

    const restNames = nameMatches.map((restaurant, idx) => {
      return (
        <Link to={`/restaurant/show/${ restaurant.id }`} key={idx}>
          <p>{ restaurant.name }</p>
        </Link>
      )
    })

    console.log(cuisines);

    return (
      <div className="picker-form">
        <div className="header-banner">
          { this.searchBanner() }
        </div>
        <div className="search-container">
          {/* <div className="header-res"
          >Reservation bar goes here
            <div className="res-date">
              
            </div>
            <div className="res-time">

            </div>
            <div className="res-people">

            </div>
          </div> */}
          <form className="search-form" autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="autocomplete">
              <div className="autocomplete-form">
                <div className="search-wrapper">
                  <i className="fas fa-search"></i>
                  <input id="rest-search"
                        type="text"
                        onChange={this.updateField}
                        value={this.state.search_term}
                        placeholder="Location, Restaurant, or Cuisine"/>
                </div>
                <div id="search-dropdown" className={`search-dropdown ${showing}`}>
                  <ul>
                    { restNames }
                    { cuisineNames }
                  </ul>
                </div>
              </div>
                <button type="submit" className="header-submit">Let's go</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(RestaurantSearch);