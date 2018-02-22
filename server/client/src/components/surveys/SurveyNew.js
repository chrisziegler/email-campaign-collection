// SurveyNew shows SurveyForm or SurveyReviewForm for review
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <h4 style={{ textAlign: 'center', marginTop: 40 }}>Survey New</h4>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
