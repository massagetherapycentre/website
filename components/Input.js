import React from 'react';
import { colors } from '../utils/theme.js';

const inputStyles = `
  color: ${colors.gray};
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};
  display: block;
  font-size: 16px;
  padding: 8px 12px;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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

export { Input, Textarea };
