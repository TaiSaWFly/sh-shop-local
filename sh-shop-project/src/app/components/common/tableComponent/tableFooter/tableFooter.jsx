import React from "react";

const TableFooter = ({ dataFooter: data, columns }) => {
  const renderContent = (data, column) => {
    if (columns[column].footer) {
      if (columns[column].footer.component) {
        const component = columns[column].footer.component;
        if (typeof component === "function") {
          return component(data);
        }
        return component;
      }
      if (columns[column].footer.name) {
        return columns[column].footer.name;
      }
    }
    return null;
  };
  return (
    <tfoot>
      <tr>
        {Object.keys(columns).map((column) => (
          <td key={column}>{renderContent(data, column)}</td>
        ))}
      </tr>
    </tfoot>
  );
};

export default TableFooter;
