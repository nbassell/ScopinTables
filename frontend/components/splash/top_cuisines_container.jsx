import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TopCuisines from './top_cuisines';
import { cuisineSearch } from '../../actions/restaurant_actions';

const mapDispatchToProps = dispatch => {
  return {
    cuisineSearch: (cuisine) => dispatch(cuisineSearch(cuisine))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(TopCuisines));