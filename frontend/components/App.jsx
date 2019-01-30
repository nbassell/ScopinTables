import React from 'react';

import Navbar from './main/navbar/navbar';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import RestaurantShowContainer from "./restaurant_show/restaurant_show_container";
import RestaurantIndexContainer from './restaurant_index/restaurant_index_container';
import Splash from './splash';
import Footer from './main/footer';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal_container';


const App = () => (
  <div id="main-page">
    <Modal />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/restaurants/:id" component={RestaurantShowContainer} />
      <Route path="/restaurant/search" component={RestaurantIndexContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;