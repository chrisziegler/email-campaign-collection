// SurveyNew shows SurveyForm or SurveyReviewForm for review
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <p style={{ textAlign: 'center', marginTop: 40, fontSize: '1.4em' }}>
          Create a New Survey
        </p>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
