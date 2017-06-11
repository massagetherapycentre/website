import React from 'react';

export default ({children}) => (
  <div>
    <h2>{children}</h2>
    <style jsx>{`
      h2: { color: #333; margin-bottom: 15px; font-size: 22px; }
    `}</style>
  </div>
);
