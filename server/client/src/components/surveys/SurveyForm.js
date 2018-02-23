// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }, i) => {
      return (
        <Field
          key={i}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="grey btn-flat black-text">
            Cancel
          </Link>
          <button type="submit" className="blue btn-flat right white-text">
            Next
            <i className="material-icons right">chevron_right</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // another option for customized error message is add property to FIELDS array
  // like noValueError: 'custom msg' then use error[name] = noValueError
  // be sure to destructure this property off FIELDS to use in _.each along with name
  _.each(FIELDS, ({ name }) => {
    //! remember bracket syntax to use variables to access properties in object
    if (!values[name]) {
      errors[name] = `You must provide ${
        name === 'emails' ? 'emails' : 'a ' + name
      }`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
