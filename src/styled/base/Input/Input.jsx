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
  rounded-md 
  shadow-sm 
  sm:text-sm

  border-gray-300 
  placeholder-gray-400 
  focus:outline-none 
  focus:ring-indigo-500 
  focus:border-indigo-500 

  ${({ $error }) =>
    $error &&
    `border-red-300 
  text-red-900 
  placeholder-red-300 
  focus:outline-none 
  focus:ring-red-500 
  focus:border-red-500`}
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
  showError,
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
            placeholder={error || placeholder}
            $error={error}
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
        {error && showError && (
          <InputError className="" id={`${name}-error`}>
            {error}
          </InputError>
        )}
      </div>
    </InputWrapper>
  );
}
