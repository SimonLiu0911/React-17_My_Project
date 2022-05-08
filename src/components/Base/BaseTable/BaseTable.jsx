import { Table } from "react-bootstrap";

import React from "react";

const Basetable = (props) => {
  const { titleList, categoryList } = props;
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          {titleList.map((item, index) => (
            <th key={item.key}>{item.titleName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {categoryList.map((item, index) => {
          return (
            <tr key={item.key}>
              <td>{index + 1}</td>
              <td>{item.categoryName}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Basetable;
