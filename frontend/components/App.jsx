import React from 'react';

import Navbar from './navbar/navbar';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import RestaurantShowContainer from "./restaurant_show/show_container";
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal_container';


const App = () => (
  <div>
    <Modal />
    <Navbar />
    <div className="main">
      <p>Find your table for any occasion</p>
    </div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/restaurants/:id" component={RestaurantShowContainer} />
    </Switch>
  </div>
);

export default App;