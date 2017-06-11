import React from 'react';

export default ({priceList}) => (
  <table>
    <thead>
      <tr>
        <th>Therapy</th>
        <th>Time</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {priceList.map((item) => (
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
        padding: 8px;
        line-height: 20px;
        text-align: left;
        vertical-align: bottom;
        border-top: 0;
        border-left: 1px solid #ddd;
        color: #62A7DC;
        background: #f0f0f0;
      }
      .table-bordered thead:first-child tr:first-child>th:last-child {
        border-top-right-radius: 4px;
      }
      tbody>tr:nth-child(odd)>td {
        background-color: #f9f9f9;
      }
      td {
        border-left: 1px solid #ddd;
        padding: 8px;
        line-height: 20px;
        text-align: left;
        vertical-align: top;
        border-top: 1px solid #ddd;
        border-collapse: separate;
      }
    `}</style>
  </table>
);
