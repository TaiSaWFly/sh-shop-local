import React from "react";
import TableBody from "../tableBody/tableBody";
import TableFooter from "../tableFooter/tableFooter";
import TableHeader from "../tableHeader/tableHeader";

const Table = ({ columns, dataBody, dataFooter, children }) => {
  return (
    <table>
      {children || (
        <>
          <TableHeader {...{ columns }} />
          <TableBody {...{ columns, dataBody }} />
          {dataFooter && <TableFooter {...{ columns, dataFooter }} />}
        </>
      )}
    </table>
  );
};

export default Table;
