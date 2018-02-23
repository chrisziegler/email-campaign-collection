// SurveyField contains logic to render a single label and text input

import React from 'react';
// like input and label, meta has already been destructured off props, but we can
// go another layer deeper and destructure the properties we want off meta too
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
