import React from "react";
import Button from "../../styled/base/Button/Button";
import Input from "../../styled/base/Input/Input";

export default function TableRow({ row, columns, index, update }) {
  const [editing, setEditing] = React.useState(false);
  const [data, setData] = React.useState(row);


  function handleChange(key, value) {
    setData({ ...data, [key]: value });
  }

  function handleResetField() {
    if (editing === true) setData({ ...data, ...row });
    setEditing(!editing)
  }

  async function handleSubmit() {
    update(data.id, data)
    setEditing(false)
  }
  return (
    <tr style={{ background: editing ? "orange" : "" }}>
      <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>

      {columns.map((column, index) => {
        const result = Object.keys(row).find(
          (key) => key === column.props.source
        );

        if (column.props.render)
          return (
            <td key={index} className="px-6 py-4 whitespace-nowrap">
              {column.props.render(data[result])}
            </td>
          );

        if (column.props?.editable !== undefined && editing) {
          return (
            <td key={index} className="px-6 py-4 whitespace-nowrap">
              <Input
                value={data[result]}
                onChange={(e) => handleChange(result, e.target.value)}
              />
            </td>
          );
        }
        return <td className="px-6 py-4 whitespace-nowrap">{data[result]}</td>;
      })}
      <td>
        {editing && (
          <Button onClick={handleSubmit}>Save</Button>
        )}


        <Button
          variant={editing ? "secondary" : "primary"}
          onClick={handleResetField}
        >
          {editing ? "Cancel" : "Edit"}
        </Button>
      </td>
    </tr>
  );
}
