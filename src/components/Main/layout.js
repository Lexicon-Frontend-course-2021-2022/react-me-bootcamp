/* ============================================================================
 * 
 * ========================================================================= */

import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: calc(${(state) => state.theme.header.height}px + 10px) 10px calc(${(state) => state.theme.footer.height}px + 10px) 10px;
`;

