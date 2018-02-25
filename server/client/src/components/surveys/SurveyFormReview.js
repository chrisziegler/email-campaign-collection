// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = formFields.map(({ label, name }, i) => {
    return (
      <div key={i}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
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
        className="grey btn-flat black-text"
        style={{ marginTop: '10px' }}
        onClick={onCancel}
      >
        Back
        <i className="material-icons left">chevron_left</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
