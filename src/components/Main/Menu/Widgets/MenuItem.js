/* ============================================================================
 * Menu item
 * ========================================================================= */

import styled from "styled-components";

export default styled.div`
  height: 26px;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  
  &:hover {
    background-color: ${(state) => state.theme.header.color + "2"};
  }
  
  &:active {
    background-color: ${(state) => state.theme.highlight.neutral + "8"};
  }

  &.selected {
    background-color: ${(state) => state.theme.highlight.neutral + "8"};
  }

`;

