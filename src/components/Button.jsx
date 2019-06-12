import styled from '@emotion/styled';
import { THEME_VARIABLES } from '../config/env.js';

export default styled.button`
  font-size: 2rem;
  font-family: 'Josefin Sans';
  font-weight: bold;
  padding: 2rem;
  border: none;
  background-color: ${THEME_VARIABLES['@primary-color']};
  color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12);
  border-radius: 7px;
`;
