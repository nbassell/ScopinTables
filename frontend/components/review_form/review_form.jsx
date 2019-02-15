import React from 'react';
import merge from 'lodash/merge';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }

  initialState() {
    if (this.props.formType === 'create') {
      return {
        overall_rating: 0,
      }
    }
  }
}