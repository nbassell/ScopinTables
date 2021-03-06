import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import ReviewForm from '../review_form/create_review_container';
import EditReviewForm from '../review_form/edit_review_container';

export default ({ modal, reviewId, closeModal }) => {
  if (!modal) {
    return null;
  }

  switch(modal) {
    case "create review":
      return (
        <div className="modal-background" onClick={ closeModal }>
          <div className="modal-child" onClick={ e => e.stopPropagation() }>
            <Route component={ ReviewForm } path="/restaurant/show/:id"/>
          </div>
        </div>
      );
    case "edit review":
    return (
      <div className="modal-background" onClick={ closeModal }>
        <div className="modal-child" onClick={ e => e.stopPropagation() }>
          <EditReviewForm reviewId={ reviewId }/>
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
};
