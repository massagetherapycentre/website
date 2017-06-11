import React from 'react';

export default ({ children, ...rest }) => (
  <a {...rest}>
    {children}
    <style jsx>{`
      a {
        color: #fff;
        background-color: #04c;
        border-radius: 6px;
        padding: 11px 19px;
        font-size: 17.5px;
        line-height: 20px;
        vertical-align: middle;
        text-decoration: none;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
        background-image: linear-gradient(to bottom,#08c,#04c);
        background-repeat: repeat-x;
        border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
        cursor: pointer;
        user-select: none;
        display: inline-block;
      }
      a:hover {
        background-position: 0 -15px;
        transition: background-position .1s linear;
      }
    `}</style>
  </a>
);
