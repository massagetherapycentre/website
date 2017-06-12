import React from 'react';
import { colors } from '../utils/theme.js';

export default ({ title, subtitle }) => (
  <div className="root">
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    <style jsx>{`
      .root {
        padding-bottom: 30px;
        border-bottom: 1px solid ${colors.lightestGray};
        margin-bottom: 30px;
      }
      h1 {
        font-size: 35px;
        color: ${colors.blue};
        margin: 0;
      }
      p {
        font-size: 14px;
        color: ${colors.gray};
        margin: 0 0 0 4px;
      }
    `}</style>
  </div>
);
