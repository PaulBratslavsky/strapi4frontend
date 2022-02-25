import React from "react";

import tw from "tailwind-styled-components";
import styled from "styled-components";

const ButtonLinkWrapper = styled.div`
  display: inline;
  button {
  }
`;

const ButtonLinkTWBase = tw.button`
  text-sm 
  font-medium 
  text-indigo-600 
  hover:text-indigo-500 
  cursor-pointer
`;

export default function ButtonLink({ children, ...rest }) {
  return (
    <ButtonLinkWrapper>
      <ButtonLinkTWBase {...rest}>{children}</ButtonLinkTWBase>
    </ButtonLinkWrapper>
  );
}
