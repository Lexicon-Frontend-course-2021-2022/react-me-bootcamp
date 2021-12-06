/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Sign = styled.div`
  margin: 0 0 0 auto;
  height: 100%;
  background-color: ${(state) => state.theme.highlight.neutral};
  color: ${(state) => state.theme.header.color};

  border: 2px solid ${(state) => state.theme.main.color};

  display: flex;
  align-items: center;
  font-size: ${(state) => state.theme.header.height * 0.5}px;
  transform: rotate(-5deg);
  padding: 0 10px;
`
/* ============================================================================
 * Component
 * ========================================================================= */
const LogoWidget = () => {
  return (
    <Sign>REACT::ME</Sign>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default LogoWidget