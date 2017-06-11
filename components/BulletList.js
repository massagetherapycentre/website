import react from 'react';

export default ({list}) => (
  <ul>
    { list.map((item, key) => <li key={key} dangerouslySetInnerHTML={{__html: item}}></li>) }
    <style jsx>{`
      ul {
        margin-bottom: 50px;
        padding-left: 50px;
        list-style-type: circle;
      }
    `}</style>
  </ul>
);
