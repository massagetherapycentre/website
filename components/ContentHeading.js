import React from 'react';

export default ({ title, subtitle }) => (
  <div className="root">
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    <style jsx>{`
      .root {
        padding-bottom: 30px;
        border-bottom: 1px solid #f0eceb;
        margin-bottom: 30px;
      }
      h1 {
        font-size: 35px;
        color: #62a7dc;
        margin: 0;
      }
      p {
        font-size: 14px;
        color: #7f7f7f;
        margin: 0 0 0 4px;
      }
    `}</style>
  </div>
);
