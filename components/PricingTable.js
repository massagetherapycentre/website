import React from 'react';
import { colors } from '../utils/theme.js';

export default ({ priceList }) => (
  <table>
    <thead>
      <tr>
        <th>Therapy</th>
        <th>Time</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {priceList.map(item => (
        <tr>
          <td>{item.name}</td>
          <td>{item.time}</td>
          <td><b>${item.price}</b></td>
        </tr>
      ))}
    </tbody>
    <style jsx>{`
      table {
        width: 100%;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-collapse: separate;
        border-spacing: 0;
        border-left: 0;
        border-radius: 4px;
        background-color: transparent;
      }
      thead:first-child tr:first-child>th:first-child {
        border-top-left-radius: 4px;
      }
      th {
        font-weight: bold;
        padding: 15px 12px;
        line-height: 20px;
        text-align: left;
        vertical-align: bottom;
        border-top: 0;
        border-left: 1px solid #ddd;
        color: ${colors.blue};
        font-size: 18px;
      }
      .table-bordered thead:first-child tr:first-child>th:last-child {
        border-top-right-radius: 4px;
      }
      td {
        border-left: 1px solid #ddd;
        padding: 15px 12px;
        line-height: 20px;
        text-align: left;
        vertical-align: top;
        border-top: 1px solid #ddd;
        border-collapse: separate;
        color: ${colors.gray};
      }
    `}</style>
  </table>
);
