import { jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const Copyright = ({ name, current_year }) => {
    return (_jsxs(Content, { children: ["\u00A9 ", current_year, " ", name, " All Rights Reserved."] }));
};
const Content = styled.div `
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
