import React from 'react';
import { colors } from '../utils/theme.js';

export default ({ children }) => (
  <div>
    <p dangerouslySetInnerHTML={{ __html: children }} />
    <style jsx>{`
      p {
        color: ${colors.gray};
      }
    `}</style>
  </div>
);
