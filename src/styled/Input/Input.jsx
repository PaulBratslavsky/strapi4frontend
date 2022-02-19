import React from "react";

import tw from "tailwind-styled-components";
import styled from "styled-components";

import { ExclamationCircleIcon } from "@heroicons/react/solid";

const InputWrapper = styled.div``;

const InputLabel = tw.label`
  block text-sm font-medium text-gray-700
`;

const InputBase = tw.input`
  appearance-none 
  block 
  w-full 
  px-3 
  py-2 
  border 
  border-gray-300 
  rounded-md 
  shadow-sm 
  placeholder-gray-400 
  focus:outline-none 
  focus:ring-indigo-500 
  focus:border-indigo-500 
  sm:text-sm
`;

const InputIconError = tw.div`
  absolute 
  inset-y-0 
  right-0 
  pr-3 
  flex 
  items-center 
  pointer-events-none
`;

const InputError = tw.p`
  mt-2 text-sm text-red-600
`;

export default function Input({
  id,
  name,
  error,
  type,
  placeholder,
  label,
  ...rest
}) {
  return (
    <InputWrapper>
      <div>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <div className="mt-1 relative rounded-md shadow-sm">
          <InputBase
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
          {error && (
            <InputIconError>
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </InputIconError>
          )}
        </div>
        {error && (
          <InputError className="" id={`${name}-error`}>
            {error}
          </InputError>
        )}
      </div>
    </InputWrapper>
  );
}
