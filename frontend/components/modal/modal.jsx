import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import ReviewFormContainer from '../review_form/create_review_container';
import EditReviewFormContainer from '../review_form/edit_review_container';
import { withRouter } from 'react-router-dom';

export default withRouter(({ modal, reviewId, closeModal, match }) => {
  if (!modal) {
    return null;
  }
  switch(modal) {
    case "create review":
      return (
        <div className="modal-background" onClick={ closeModal }>
          <div className="modal-child" onClick={ e => e.stopPropagation() }>
            {/* <Route component={ ReviewFormContainer } path="/restaurant/show/:id"/> */}
            <ReviewFormContainer restaurantId ={ match.params.id }/>
          </div>
        </div>
      );
    case "edit review":
    return (
      <div className="modal-background" onClick={ closeModal }>
        <div className="modal-child" onClick={ e => e.stopPropagation() }>
          <EditReviewFormContainer reviewId={ reviewId }/>
        </div>
      </div>
    );
    case "login":
      return (
        <div className="modal-background" onClick={ closeModal }>
          <div className="modal-child" onClick={ e => e.stopPropagation() }>
            <LoginFormContainer formType={ modal }/>
          </div>
        </div>
      );
    case "signup":
      return (
        <div className="modal-background" onClick={ closeModal }>
          <div className="modal-child" onClick={ e => e.stopPropagation() }>
            <SignupFormContainer formType={ modal }/>
          </div>
        </div>
      );
  }
});
