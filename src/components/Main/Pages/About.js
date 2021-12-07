
/* ============================================================================
 * 
 * ========================================================================= */
import { Content } from '../layout';

import styled from 'styled-components';


const H1 = styled.h1`
margin: 0;
`

const P = styled.p`
`

/* ============================================================================
 * Component
 * ========================================================================= */
const AboutPage = () => {
  return (
    <Content>
      <H1>About</H1>
      <P>This is only an app.</P>
    </Content >
  )
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default AboutPage;