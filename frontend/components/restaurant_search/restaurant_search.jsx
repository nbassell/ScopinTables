import React from 'react';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.searchResult = this.searchResult.bind(this);
    this.stringIncludeKey = this.stringIncludeKey.bind(this);
    this.state = {
      inputVal: ''
    };
  }
  
  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }

  // matches() {
  //   const matches = [];
  //   if (this.state.inputVal.length === 0) {
  //     return this.props.restaurants;
  //   }

  //   this.props.restaurants.forEach(restaurant => {
  //     const sub = restaurant.slice(0, this.state.restaurant)
  //   })
  // }

  stringIncludeKey(string, key) {
    if (key === '') return true;
    if (string[0] === key[0]) {
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

  render() {
    const restNames = this.props.restaurants.map((restaurant, idx) => {
      if (this.state.inputVal === '' || this.stringIncludeKey(restaurant, this.state.inputVal)) {
        return (
          <li key={idx}>{restaurant}</li>
        );
      }
    });

    return (
      <>
        <div id="search-container">
          <input id="rest-search" type="text" onChange={this.handleSubmit} value={this.state.inputVal} placeholder="Location, Restaurant, or Cuisine"/>
          <ul className="search-list">
            {restNames}
          </ul>
        </div>  
      </>
    )
  }
}

export default RestaurantSearch;