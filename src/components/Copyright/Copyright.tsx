import { CopyrightProps } from "Copyright.ts";
import styled from "styled-components";

const Copyright = ({ name, current_year }: CopyrightProps) => {
  return (
    <Content>
      © {current_year} {name} All Rights Reserved.
    </Content>
  );
};

const Content = styled.div`
  display: inline;
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 1.5rem;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

export default Copyright;
