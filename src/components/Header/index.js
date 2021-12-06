/* ============================================================================
 * Imports
 * ========================================================================= */
import LogoWidget from "./Logo";
import User from "./User";

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Header = styled.header`
  background-color: ${(state) => state.theme.header.backgroundColor};
  color: var(--color-header);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  border-bottom: 1px solid ${(state) => state.theme.header.color}4;
  border-top: 1px solid ${(state) => state.theme.header.color}4;
  height: 100%;
`;

/* ============================================================================
 * Component
 * ========================================================================= */
const HeaderArea = () => {
  return (
    <>
      <Header>
        <User />
        <LogoWidget />
      </Header>
    </>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default HeaderArea;