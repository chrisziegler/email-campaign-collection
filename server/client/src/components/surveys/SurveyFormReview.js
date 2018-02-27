// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }, i) => {
    return (
      <div key={i}>
        <label>{label}</label>
        <div style={{ fontSize: '1.3em' }}>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <p style={{ textAlign: 'center', marginTop: 40, fontSize: '1.4em' }}>
        Please confirm your Survey entries before submitting.
      </p>
      {reviewFields}
      <button
        className="red btn-flat white-text"
        style={{ marginTop: '25px' }}
        onClick={onCancel}
      >
        Back
        <i className="material-icons left">chevron_left</i>
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green darken-1 white-text btn-flat right"
        style={{ marginTop: '25px' }}
      >
        Send Survey
        <i className="material-icons white-text right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
