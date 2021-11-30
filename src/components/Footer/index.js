/* ============================================================================
 * Imports
 * ========================================================================= */
import packageJson from '../../package.json';


/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: ${(state) => state.theme.footer.backgroundColor};
  color: ${(state) => state.theme.footer.color};
`

const Copyright = styled.div`
font-size: ${(state) => state.theme.footer.height * .5}px;
`
const Version = styled.div`
  font-size: ${(state) => state.theme.footer.height * .5}px;
`

/* ============================================================================
 * Component
 * ========================================================================= */
const Component = () => {
  return (
    <>
      <Footer>
        <Version>{packageJson.name} v{packageJson.version}</Version>
        -
        <Copyright>Copyright &copy; 2021 - Thomas Hellström</Copyright>
      </Footer>
    </>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default Component