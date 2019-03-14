
import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import withRouter from 'react-router-dom';

class TopCuisines extends React.Component {
  constructor(props) {
    super(props);
  }

  // goSearch() {
  //   this.props.history.push('/restaurants')
  // }
  
  render() {

    return (
      <div className="top-cuisines">
        <div className="tc-border-top">
          <div className="top-cuisines-photo-1 darken">
            {/* <button onClick={handleClick('american')}> */}
              {/* <h1 className="top-cuisines-text">Best American Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/8AFC7ADC-DE3B-439D-91F2-CE568C1A653B.jpg" alt="American" /> */}
            {/* </button> */}
          </div>
        </div>
        <div className="tc-border-top">
          <div className="top-cuisines-photo-2 darken">
            <button to={`/restaurant/search`}>
              <h1 className="top-cuisines-text">Best Italian Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/48E9D049-40CF-4CB9-98D9-8C47D0D58986.jpg" alt="Italian" />
            </button>
          </div>
        </div>
        <div className="tc-border-top">
          <div className="top-cuisines-photo-3 darken">
            <button to={`/restaurant/search`}>
              <h1 className="top-cuisines-text">Best Contemporary American Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/2B0938A7-B430-48B2-BF04-045BBE6C3BB2.jpg" alt="Contemporary America
            n" /></button>
          </div>
        </div>
        <div className="tc-border-top">
          <div className="top-cuisines-photo-4 darken">
            <button to={`/restaurant/search`}>
              <h1 className="top-cuisines-text">Best Seafood Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/0735C10C-6AB6-46F6-87AA-8FE54397744D.jpg" alt="Seafood" />
            </button>
          </div>
        </div>
        <div className="tc-border-top">
          <div className="top-cuisines-photo-5 darken">
            <button to={`/restaurant/search`}>
              <h1 className="top-cuisines-text">Best Mediterranean Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/71C5B1FC-DC2A-4DFF-BF31-F4E7B8E956A0.jpg" alt="Mediterranean" />
            </button>
          </div>
        </div>
        <div className="tc-border-top">
          <div className="top-cuisines-photo-6 darken">
            <button to={`/restaurant/search`}>
              <h1 className="top-cuisines-text">Best Steakhouse Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/6C913B35-FFD3-498C-93F0-A3E7086EBE25.jpg" alt="Steakhouse" />
            </button>
          </div>
        </div>
        {/* <div className="tc-border-top">
          <div className="top-cuisines-photo-7 darken">
          <button to={`/restaurant/search`}>
            <h1 className="top-cuisines-text">Best French Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/73289F47-FE6D-4B16-94EA-F24DC1FDFC26.jpg" alt="French" />
            </button>
          </div>
        </div>
        <div className="tc-border-top">
          <div className="top-cuisines-photo-8 darken">
          <button to={`/restaurant/search`}>
            <h1 className="top-cuisines-text">Best Japanese Restaurants Around You</h1>
              <img className="top-cuisines-photo" src="http://cdn.otstatic.com/start-page-rush-654/73289F47-FE6D-4B16-94EA-F24DC1FDFC26.jpg" alt="Japanese" />
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withRouter(TopCuisines);