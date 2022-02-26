import React from "react";

import tw from "tailwind-styled-components";
import styled from "styled-components";

import { ExclamationCircleIcon } from "@heroicons/react/solid";

const TextareaWrapper = styled.div``;

const TextareaLabel = tw.label`
  block text-sm font-medium text-gray-700
`;

const TextareaBase = tw.textarea`
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
  rows,
  name,
  value,
  error,
  type,
  label,
  showError,
  ...rest
}) {
  return (
    <TextareaWrapper>
      <div>
        {label && <TextareaLabel htmlFor={name}>{label}</TextareaLabel>}
        <div className="mt-1 relative rounded-md shadow-sm">
          <TextareaBase
            id={id}
            rows={rows}
            name={name}
            type={type}
            defaultValue={(error && !showError) ? error : value}
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
    </TextareaWrapper>
  );
}
