import React from 'react';
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import CreateReviewForm from '../review_form/create_review_container';
import EditReviewForm from '../review_form/edit_review_container';
import { Route } from 'react-router-dom';

export default ({ modal, closeModal, reviewId }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer formType={modal} />;
      break;
    case 'signup':
      component = <SignupFormContainer formType={modal} />;
      break;
    case 'create review':
      return (
        <div className="modal-background" onClick={ closeModal }>
          <div className="modal-child" onClick={ e => e.stopPropagation() }>
            <Route component={ ReviewForm } path="/restaurants/:id"/>
          </div>
        </div>
      );
    case 'edit review':
      component = <EditReviewForm reviewId={reviewId} />;
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

// import React from 'react';
// import LoginFormContainer from "../session_form/login_form_container";
// import SignupFormContainer from "../session_form/signup_form_container";
// import CreateReviewForm from '../review_form/create_review_container';
// import EditReviewForm from '../review_form/edit_review_container';

// export default ({ modal, reviewId, closeModal }) => {
//   if (!modal) {
//     return null;
//   }

//   switch(modal) {
//     case "create review":
//       return (
//         <div className="modal-background" onClick={ closeModal }>
//           <div className="modal-child" onClick={ e => e.stopPropagation() }>
//             <Route component={ ReviewForm } path="/restaurants/:id"/>
//           </div>
//         </div>
//       );
//     case "edit review":
//     return (
//       <div className="modal-background" onClick={ closeModal }>
//         <div className="modal-child" onClick={ e => e.stopPropagation() }>
//           <EditReviewForm reviewId={ reviewId }/>
//         </div>
//       </div>
//     );
//     case "login":
//     case "signup":
//       return (
//         <div className="modal-background" onClick={ closeModal }>
//           <div className="modal-child" onClick={ e => e.stopPropagation() }>
//             <SessionFormContainer formType={ modal }/>
//           </div>
//         </div>
//       );
//   }
// };
