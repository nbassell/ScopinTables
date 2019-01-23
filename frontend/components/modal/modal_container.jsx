import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Modal from "./modal.jsx";

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
