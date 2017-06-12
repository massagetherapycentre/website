import React from 'react';
import { colors } from '../utils/theme.js';

export default ({ children, ...rest }) => (
  <a {...rest}>
    {children}
    <style jsx>{`
      a {
        color: ${colors.white};
        text-decoration: none;
        background-color: ${colors.blue};
        border-radius: 4px;
        padding: 12px 25px;
        line-height: 1;
        cursor: pointer;
        user-select: none;
        display: inline-block;
      }
      a:hover {
        box-shadow: 0 1px 3px rgba(0,0,0, 0.3);
        transition: box-shadow 150ms ease;
      }
    `}</style>
  </a>
);
