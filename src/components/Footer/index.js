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

  height: ${(state) => state.theme.footer.height}px;
  width: 100%;
  background-color: ${(state) => state.theme.footer.backgroundColor};
  color: ${(state) => state.theme.footer.color};
  opacity: 95%;
`

const Copyright = styled.div`
font-size: ${(state) => state.theme.footer.height * .5}px;
`

const A = styled.a`
  font-size: ${(state) => state.theme.footer.height * .5}px;
  color: ${(state) => state.theme.footer.color};
`

/* ============================================================================
 * Component
 * ========================================================================= */
const FooterArea = () => {
  return (
    <>
      <Footer>
        <A target="_new" href="https://github.com/Lexicon-Frontend-course-2021-2022/react-me-bootcamp">{packageJson.name} v{packageJson.version}</A>
        -
        <Copyright>Copyright &copy; 2021 - <A href="mailto:rel@xed.se?subject=Cool project bro!">Thomas Hellström</A></Copyright>
      </Footer>
    </>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default FooterArea