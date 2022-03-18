import styled from "styled-components";
import tw from "tailwind-styled-components";

const PageWrapper = styled.div`
  background-color: #fafafa;
`;

const PageTWBase = tw.div`
  h-screen 
  overflow-auto

`;

export default function Page({ children, ...rest }) {
  return (
    <PageWrapper>
      <PageTWBase {...rest}>{children}</PageTWBase>
    </PageWrapper>
  );
}
