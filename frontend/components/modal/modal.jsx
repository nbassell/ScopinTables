import React from 'react';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import CreateReviewForm from './'
import EditReviewForm from './'


export default ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'create review':
      component = <CreateReviewForm />
    case 'edit review':
      component = <EditReviewForm />;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={ closeModal }>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}