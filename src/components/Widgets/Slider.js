/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector } from 'react-redux'

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Slider = styled.div`
  border: 1px solid ${(state) => state.theme.header.color + "8"};
  border-radius: 10px;
  height: 20px;
  width: 40px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: ${(state) => state.theme.name === 'Light' ? 'flex-start' : 'flex-end'};
`

const Knob = styled.div`
  background-color: ${(state) => state.theme.header.backgroundColor};
  border: 1px solid ${(state) => state.theme.header.color + "8"};
  border-radius: 10px;
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
`

/* ============================================================================
 * Component
 * ========================================================================= */
const SliderWidget = ({ enabled, enabledColor, disabledColor }) => {

  const state = useSelector(state => state);
  enabledColor = enabledColor || state.theme.highlight.neutral;
  disabledColor = disabledColor || '#0000';

  return (
    <Slider
      style={{
        backgroundColor: enabled ?
          enabledColor :
          disabledColor
      }}> <Knob /></Slider >
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default SliderWidget;