import React from 'react';

const inputStyles = `
  border-radius: 4px;
  border: 1px solid #ccc;
  display: block;
  font-size: 16px;
  padding: 8px 12px;
  width: 100%;
`;

const inputHoverStyles = `
  outline: 0;
  border-color: #309ddf;
`;

const Input = ({ ...props }) => (
  <div>
    <input {...props} />
    <style jsx>{`
        input {
          ${inputStyles}
        }
        input:focus {
          ${inputHoverStyles}
        }
      `}</style>
  </div>
);

const Textarea = ({ ...props }) => {
  return (
    <div>
      <textarea {...props} />
      <style jsx>{`
        textarea {
          ${inputStyles}
        }
        textarea:focus {
          ${inputHoverStyles}
        }
      `}</style>
    </div>
  );
};

export {
  Input,
  Textarea
};
