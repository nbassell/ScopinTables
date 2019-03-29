import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { IconContext } from "react-icons";

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { currentUser, restaurant, favorites, createFavorite, deleteFavorite, openLogin } = this.props;
    if (!currentUser) openLogin();

    if (favorites.includes(restaurant.id)) {
        deleteFavorite(restaurant.id);
    } else {
      createFavorite(restaurant.id);
    }
  }



  render() {
    const favoriteButton = this.props.favorites.includes(this.props.restaurant.id) ? (
      <button className="favorite-button" onClick={ this.handleClick }>
        <IconContext.Provider value={{ color: "#da3743", className: "bookmark-icon" }}>
          <FaBookmark />
        </IconContext.Provider>
        Restaurant saved!
      </button>
    ) : (
      <button className="favorite-button" onClick={ this.handleClick }>
        <IconContext.Provider value={{ className: "bookmark-icon" }}>
          <FaRegBookmark/>
        </IconContext.Provider>
        Save this restaurant
      </button> )

    return (
      <>
        { favoriteButton }
      </>
    )
  }

}

export default FavoriteButton;