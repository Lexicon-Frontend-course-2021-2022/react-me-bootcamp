import dark from './logo-dark.png';
import light from './logo-light.png';

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Logo = styled.div`
  background-image: url("${(state) => state.theme.name === 'Dark' ? dark : light}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto 0 0;
  height: ${(state) => state.theme.header.height * 0.7}px;
  width: ${(state) => state.theme.header.height * 0.7}px;
`;

/* ============================================================================
 * Component
 * ========================================================================= */
const Component = () => {
  return (
    <Logo />
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default Component