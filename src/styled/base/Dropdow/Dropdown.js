import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Dropdown({
  options,
  label,
  keySelect,
  selected,
  setSelected,
  className,
}) {
  return (
    <div className={className}>
    <Listbox value={selected} onChange={setSelected} >
      {label && <Listbox.Label>{label}</Listbox.Label>}
      <div className="relative mt-1">
        <Listbox.Button className="block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left">
          <span className="block truncate">{selected[keySelect]}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? "text-indigo-600 bg-indigo-100" : "text-gray-900"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item[keySelect]}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
    </div>
  );
}
