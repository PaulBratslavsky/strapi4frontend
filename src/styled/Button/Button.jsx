import React from 'react'

import tw from "tailwind-styled-components";
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: inline;
  button { }
`;

const ButtonTWBase = tw.button`
   text-white 
   bg-text-white 
   bg-blue-700 
   hover:bg-blue-800 
   focus:ring-4 
   focus:ring-blue-300 
   font-medium 
   rounded-full 
   text-sm 
   px-5 
   py-2.5 
   text-center 
   mr-2 
   mb-2 
   dark:bg-blue-600 
   dark:hover:bg-blue-700 
   dark:focus:ring-blue-800-700 
   hover:bg-blue-800 
   focus:ring-4 
   focus:ring-blue-300 
   font-medium 
   rounded-full 
   text-sm 
   px-5 
   py-2.5 
   text-center 
   mr-2 
   mb-2 
   dark:bg-blue-600 
   dark:hover:bg-blue-700 
   dark:focus:ring-blue-800
`;



export default function Button({ children, ...props }) {
  return (
    <ButtonWrapper>
      <ButtonTWBase {...props}>
        {children}
      </ButtonTWBase>
    </ButtonWrapper>
  )
}
