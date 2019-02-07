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
import Splash from './splash/splash';
import Footer from './main/footer';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal_container';
import Ping from './main/ping';


const App = () => (
  <div id="main-page">
    <Modal />
    <Navbar />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/ping" component={Ping} />
      <Route exact path="/" component={Splash} />
      <Route path="/restaurant/search" component={RestaurantIndexContainer} />
      <Route path="/restaurants/:id" component={RestaurantShowContainer} />
    </Switch>
    {/* <Footer /> */}
  </div>
);

export default App;