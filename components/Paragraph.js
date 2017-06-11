import React from 'react';

let boo = 'blah';
export default ({children}) => (
  <div>
    <p dangerouslySetInnerHTML={{__html: children}}></p>
    <style jsx>{`
      p: { margin-bottom: 2em; }
    `}</style>  
  </div>
);
