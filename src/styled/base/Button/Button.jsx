import React from "react";

import tw from "tailwind-styled-components";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: inline;
  button {
  }
`;

const ButtonTWBase = tw.button`
  w-full 
  flex 
  justify-center 
  py-2 
  px-4 
  border 
  border-transparent 
  rounded-md 
  shadow-sm 
  text-sm 
  font-medium 
  text-white   
  bg-indigo-600
  hover:bg-indigo-700 
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2 
  focus:ring-indigo-500
  ${(props) => props.variant === "primary" && "bg-indigo-600"}
  ${(props) => props.variant === "primary" && "hover:bg-indigo-400"}
  ${(props) => props.variant === "secondary" && "bg-gray-400"}
  ${(props) => props.variant === "secondary" && "hover:bg-gray-500"}
`;

export default function Button({ children, variant, ...rest }) {
  return (
    <ButtonWrapper>
      <ButtonTWBase variant={variant} {...rest}>
        {children}
      </ButtonTWBase>
    </ButtonWrapper>
  );
}
