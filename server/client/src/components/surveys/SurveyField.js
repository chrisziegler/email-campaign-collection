// SurveyField contains logic to render a single label and text input

import React from 'react';
import './Form.css';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        style={{
          marginBottom: '5px',
          border: '1px solid #969696',
          fontSize: '1.3em',
          color: '#3f3e3e',
          borderRadius: '4px',
          paddingLeft: '5px'
        }}
      />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
