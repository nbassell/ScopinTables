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
    if (!currentUser) this.props.openLogin();

    if (this.props.favorites.includes(this.props.restaurant.id)) {
        this.props.deleteFavorite();
    } else {
      this.props.createFavorite();
    }
  }



  render() {
    const favoriteButton = this.props.favorites.includes(this.props.restaurant.id) ? (
      <button onClick={ this.handleClick }>
        <IconContext.Provider value={{ color: "#da3743", className: "bookmark-icon" }}>
          <FaBookmark />
        </IconContext.Provider>
        Restaurant saved!
      </button>
    ) : (
      <button onClick={ this.handleClick }>
        <FaRegBookmark />
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