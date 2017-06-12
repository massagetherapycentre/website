import react from 'react';
import { colors } from '../utils/theme.js';

export default ({ list }) => (
  <ul>
    {list.map((item, key) => (
      <li key={key} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
    <style jsx>{`
      ul {
        margin-bottom: 50px;
        padding-left: 50px;
        list-style-type: circle;
        color: ${colors.gray};
      }
    `}</style>
  </ul>
);
