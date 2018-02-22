// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <p style={{ marginLeft: 20, marginTop: 20, fontSize: '1.4em' }}>
          Survey Form
        </p>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
