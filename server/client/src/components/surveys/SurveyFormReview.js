// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <p style={{ textAlign: 'center', marginTop: 40, fontSize: '1.4em' }}>
        Please confirm your Survey entries before submitting.
      </p>
      <div>
        <label>Survey Title</label>
        <div>{formValues.title}</div>
      </div>
      <div>
        <label>Email Subject Line</label>
        <div>{formValues.subject}</div>
      </div>
      <div>
        <label>Email Body</label>
        <div>{formValues.body}</div>
      </div>
      <div>
        <label>Recipients List</label>
        <div>{formValues.emails}</div>
      </div>
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
