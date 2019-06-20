
import React from "react";
import { withRouter } from 'react-router-dom';

class TopCuisines extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.cuisineSearch(e.currentTarget.id)
      .then(() => this.props.history.push('/restaurants/search'));
  }
  
  render() {

    return (
      <div className="top-cuisines">
        
          <div className="cuisine-item darken">
            <div
              onClick={ this.handleClick }
              id="american">
              <h1 className="top-cuisines-text">Best American Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/8AFC7ADC-DE3B-439D-91F2-CE568C1A653B.jpg" alt="American" />
            </div>
          </div>
          <div className="cuisine-item darken">
            <div
              onClick={ this.handleClick }
              id="italian">
              <h1 className="top-cuisines-text">Best Italian Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/48E9D049-40CF-4CB9-98D9-8C47D0D58986.jpg" alt="Italian" />
            </div>
          </div>
          <div className="cuisine-item darken">
            <div
              onClick={ this.handleClick }
              id="contemporary american">
              <h1 className="top-cuisines-text">Best Contemporary American Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/2B0938A7-B430-48B2-BF04-045BBE6C3BB2.jpg" alt="Contemporary America
            n" /></div>
          </div>
          <div className="cuisine-item darken">
            <div
              onClick={ this.handleClick }
              id="seafood">
              <h1 className="top-cuisines-text">Best Seafood Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/0735C10C-6AB6-46F6-87AA-8FE54397744D.jpg" alt="Seafood" />
            </div>
          </div>
          <div className="cuisine-item darken">
            <div
              onClick={ this.handleClick }
              id="mediterranean">
              <h1 className="top-cuisines-text">Best Mediterranean Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/71C5B1FC-DC2A-4DFF-BF31-F4E7B8E956A0.jpg" alt="Mediterranean" />
            </div>
          </div>
          <div className="cuisine-item darken">
            <div
              onClick={ this.handleClick }
              id="steakhouse">
              <h1 className="top-cuisines-text">Best Steakhouse Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/6C913B35-FFD3-498C-93F0-A3E7086EBE25.jpg" alt="Steakhouse" />
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(TopCuisines);