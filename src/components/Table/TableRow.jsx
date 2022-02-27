import React from "react";

export default function TableRow({row, columns, index }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>

      {columns.map((column, index) => {
        
        const result = Object.keys(row).find(
          (key) => key === column.props.source
        );

        if (column.props.render)
          return (
            <td key={index} className="px-6 py-4 whitespace-nowrap">
              {column.props.render(row[result])}
            </td>
          );

        return <td className="px-6 py-4 whitespace-nowrap">{row[result]}</td>;
      })}
    </tr>
  );
}
