import { Header } from "components";
import styled from "@xstyled/styled-components";

const FixedHeaderTemplate = styled.div`
  padding-top: 48px;
  min-height: 100vh;
`;

export const DefaultTemplate = ({ children, isLoading }) => {
  return (
    <>
      <Header isLoading={isLoading} />
      <FixedHeaderTemplate>{children}</FixedHeaderTemplate>
    </>
  );
};
