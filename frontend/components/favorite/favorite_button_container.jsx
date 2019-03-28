import { connect } from 'react-redux';
import FavoriteButton from './favorite_button';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }) => {
  return ({
    favorites: entities.favorites,
    currentUser: entities.users[session.id]
  });
};

const mapDispatchToProps = ( dispatch, { restaurant }) => {
  return ({
    createFavorite: () => dispatch(createFavorite(restaurant.id)),
    deleteFavorite: () => dispatch(deleteFavorite(restaurant.id)),
    openLogin: () => dispatch(openModal('login')),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);