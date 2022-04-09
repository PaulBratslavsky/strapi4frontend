/* This example requires Tailwind CSS v2.0+ */
import { Children } from "react";
import TableRow from "./TableRow";

export default function Table({ children, sourceData, update, remove }) {
  if (!sourceData) return null;

  const columns = Children.toArray(children);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.props.label}
                    </th>
                  ))}
                   <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {sourceData.map((row, index) => {
                  return (
                    <TableRow
                      key={row}
                      row={row}
                      columns={columns}
                      update={update}
                      remove={remove}
                      index={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
