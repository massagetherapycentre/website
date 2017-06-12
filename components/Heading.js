import React from 'react';
import { colors } from '../utils/theme.js';

export default ({ children }) => (
  <div>
    <h2>{children}</h2>
    <style jsx>{`
      h2 {
        color: ${colors.blue};
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
);
