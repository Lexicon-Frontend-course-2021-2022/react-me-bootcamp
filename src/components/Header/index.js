/* ============================================================================
 * Imports
 * ========================================================================= */
import Component from "./Logo";

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Header = styled.header`
  background-color: ${(state) => state.theme.header.backgroundColor};
  color: var(--color-header);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
`;

/* ============================================================================
 * Component
 * ========================================================================= */
const Navbar = () => {
  return (
    <>
      <Header>
        <Component />
      </Header>
    </>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default Navbar