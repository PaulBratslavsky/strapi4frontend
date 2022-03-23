import React from "react";
import Input from "../../styled/base/Input/Input";
import classNames from 'classnames';

export default function TableRow({ row, columns, index, update, remove }) {
  const [editing, setEditing] = React.useState(false);
  const [data, setData] = React.useState(row);

  function handleChange(key, value) {
    setData({ ...data, [key]: value });
  }

  function handleResetField() {
    if (editing === true) setData({ ...data, ...row });
    setEditing(!editing);
  }

  function handleDelete() {
    alert("Delete");
    remove(data.id)
  }

  async function handleSubmit() {
    alert("Step 1");
    update(data.id, data);
    setEditing(false);
  }
  return (
    <tr className={ editing ? "bg-gray-50" : "" }>
      <td className="px-6 py-4 whitespace-nowrap leading-9">{index + 1}</td>

      {columns.map((column, index) => {
        const result = Object.keys(row).find(
          (key) => key === column.props.source
        );

        if (column.props.render)
          return (
            <td key={index} className="px-6 py-4 whitespace-nowrap leading-9">
              {column.props.render(data[result])}
            </td>
          );

        if (column.props?.editable !== undefined && editing) {
          return (
            <td key={index} className="px-6 py-2 whitespace-nowrap">
              <Input
                value={data[result]}
                onChange={(e) => handleChange(result, e.target.value)}
              />
            </td>
          );
        }
        return <td className="px-6 py-4 whitespace-nowrap leading-9">{data[result]}</td>;
      })}

      <td className="w-32  px-6 py-4 whitespace-nowrap flex justify-between items-center leading-9">
        {columns[0].props?.editable !== undefined && (
          <>
            {editing && (
              <span
                className="cursor-pointer text-indigo-600 hover:text-indigo-900 mr-1"
                onClick={handleSubmit}
              >
                Save
              </span>
            )}

            <span
              className={classNames("cursor-pointer  mr-1", editing ? "text-gray-500 hover:text-gray-600" : "text-indigo-600 hover:text-indigo-900")}
              onClick={handleResetField}
            >
              {editing ? "Cancel" : "Edit"}
            </span>
            {!editing && (
              <span
                className="cursor-pointer text-red-600 hover:text-red-900"
                onClick={handleDelete}
              >
                Delete
              </span>
            )}
          </>
        )}
      </td>
    </tr>
  );
}
