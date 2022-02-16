import React from "react";

const TableTotalRow = ({ name, amount }) => {
  return (
    <tr>
      <td className="final_sums">{name}</td>
      <td colSpan={2} className="final_sums">{amount} BYN</td>
    </tr>
  );
};

export default TableTotalRow;
