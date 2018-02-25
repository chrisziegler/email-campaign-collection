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
          border: '1px solid #F7F6F6',
          fontSize: '1.4em',
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
